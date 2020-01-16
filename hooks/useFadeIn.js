import React, { useEffect, useRef } from "react";

//fadeIn animation 
export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number") {
    console.warn("duration should be a number");
  }
  if (typeof delay !== "number") {
    console.warn("delay should be a number");
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

//Example
const App = () => {
  const fadeInH1 = useFadeIn(2, 3);
  const fadeInP = useFadeIn(3, 0);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>hellooo</p>
    </div>
  );
}