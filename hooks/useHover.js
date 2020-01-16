import React, { useEffect } from 'react'

export const useHover = onHover => {
  if(!typeof onClick !== 'function'){
    return
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    //clean up = componentWillUnMount, 이벤트 리스너 제거
    return () => element.current.removeEventListener("mouseenter", onHover);
  }, []); // EventListener 는 처음 한번만 실행되도록 [] 전달
  return element;
};

//Example
const App = () => {
  // const input = useRef();
  // const potato = useRef();
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      {/* <input ref={potato} />
      <input ref={input} /> */}
      <h1 ref={title}>Hi</h1>
    </div>
  );
}