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
