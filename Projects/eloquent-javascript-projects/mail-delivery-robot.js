"use strict";
/**  ----- set up the environment--------*/

// all the roads in Meadowfield
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

//  build a graph so that given a place, tells us what can be reached from that place
// given an array of edges, buildGraph creates a map object that, for each node, stores and array of connected nodes

function buildGraph(edges) {
  let graph = Object.create(null); //allow object act like a real map
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to]; // destruction
    } else {
      graph[from].push(to);
    }
  }
  // string to array: split()
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

/** ------------ The tasks ------------*/
/** there are parcels in various places, each addressed to some other places. robot picks up the parcels when it comes to them and delivers them when it arrives at their destinations
 * the automation must decie, at each point, where to go next. It has finished its task when all parcels have been delivered.
 */

// create a virtual world to describe the situation where the robot is and where the parcels are, and update situation when parcels are delivered

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      // .map() takes care of the moving
      // .filter() takes care of delivering
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}
/**in the class VillageState,
 * Parcel objects aren’t changed when they are moved but re-created. The move method gives us a new village state but leaves the old one entirely intact. */

// Tip: Persistent Data: immutable ----- complexity management
// the Object.freeze method, but becareful to use it to crete immutable value
let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value); //5;

// Simulation
/**
 *A delivery robot looks at the world and decides in which direction it wants to move. As such, we could say that a robot is a function that takes a VillageState object and returns the name of a nearby place.

 Because we want robots to be able to remember things, so that they can make and execute plans, we also pass them their memory and allow them to return a new memory. Thus, the thing a robot returns is an object containing both the direction it wants to move in and a memory value that will be given back to it the next time it is called.
 */

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

/**Consider what a robot has to do to “solve” a given state. It must pick up all parcels by visiting every location that has a parcel and deliver them by visiting every location that a parcel is addressed to, but only after picking up the parcel.
 * what is the strategy ??
 */
