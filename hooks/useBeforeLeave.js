import React, { useEffect } from "react";

//브라우저 창을 벗어나는 경우 팝업 이런거
export const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) { //마우스 위치가 위로 갈때만 발생.
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle); //mousemove 등등 여러 경우 가능
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => {
    console.log("do not leave me!!!");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}