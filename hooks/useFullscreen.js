import React, { useRef } from "react";

//Full screen
export const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen(); //firefox
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen(); //opera
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen(); //ie
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); //firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); //opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); //ie
    }
    runCb(false);
  };
  return { element, triggerFullscreen, exitFull };
};

//Example
const App = () => {
  const onFulls = isFull => {
    //isFull = boolean
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFullscreen, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="https://cdn2.benhallbenhall.com/wp-content/uploads/sites/8/2018/01/stats_image_284202.jpg"
          alt=""
        />
        <button onClick={exitFull}>Exit full screeen</button>
      </div>
      <br />
      <button onClick={triggerFullscreen}>Make image useFullscreen</button>
    </div>
  );
}
