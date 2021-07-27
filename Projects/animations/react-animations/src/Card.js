import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";

export function TwoFlips() {
  const [state, setState] = useState({ front: true, back: false });

  const handleClick = () => {
    setState({ ...state, front: false });
  };

  return (
    <div className="two-flips">
      <CSSTransition
        in={state.front}
        classNames={"card-front-"}
        timeout={300}
        unmountOnExit={true}
        // appear={true}
        onExit={() => setState({ ...state, back: true })} // when front card unmount, back card start animate on enter: in->true
      >
        <Card handleClick={handleClick} className="card card-front" />
      </CSSTransition>

      <CSSTransition
        in={state.back}
        classNames={"card-back-"}
        timeout={800}
        mountOnEnter={true} // when
      >
        {/* only when front card unmount, the back card then start render, and only when in={true} which means animation classList are added, back card can start mount/enter  */}
        {state.back && <Card className="card card-back" />}
      </CSSTransition>
    </div>
  );
}

export function FadeInCard() {
  const [card, setCard] = useState(true);
  const handleClick = () => {
    card ? setCard(false) : setCard(true);
  };
  return (
    <CSSTransition
      in={card}
      timeout={{ exit: 200, appear: 1000, enter: 200 }}
      //   appear={true}
      //   unmountOnExit={true}
      classNames={"fade-in"}
    >
      <Card className="card" handleClick={handleClick} />
    </CSSTransition>
  );
}

export default function Card(props) {
  return (
    <div className={props.className} onClick={props.handleClick}>
      Card
    </div>
  );
}
