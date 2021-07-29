import React, {
  createContext,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ArrowRightSvg } from "../assets/IconsSvg";

export default function Cursor() {
  const cursorRef = useRef(null);
  const { x, y } = useMousePosition();
  const { cursorType } = useContext(MouseContext);

  // get cursor events from context
  const { hoverCta, hoverDiscover, hoverMenu, menuOpen } = cursorType;
  const cursorClassName =
    "cursor " +
    (hoverCta
      ? "hoverCta"
      : hoverDiscover
      ? "hoverDiscover"
      : hoverMenu
      ? menuOpen
        ? "closeMenu hoverMenu"
        : "hoverMenu"
      : "");

  useEffect(() => {
    // move cursor
    const cursor = cursorRef.current;
    cursorRef.current.style.transform = `translate(${
      x - cursor.offsetWidth / 2
    }px,${y - cursor.offsetHeight / 2}px)`;
  }, [x, y]);

  // conditional rendering different style based on cursor event/states
  return (
    <div ref={cursorRef} className={cursorClassName}>
      <span className="cursor__menu">menu</span>
      <span className="cursor__menu-close">close</span>
      <span className="cursor__cta">Learn&nbsp;More</span>
      <span className="cursor__discover">Discover</span>

      <ArrowRightSvg className="cursor__arrow" viewBox="0 0 13 26" />
    </div>
  );
}

// Mouse position hook
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

export const MouseContext = createContext({
  cursorType: {},
  cursorChangeHandler: () => {},
});

export const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState({
    hoverCta: false,
    hoverDiscover: false,
    hoverMenu: false,
    menuOpen: false,
  });
  const cursorChangeHandler = (newCursorType) => {
    setCursorType({ ...cursorType, ...newCursorType });
  };
  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};
