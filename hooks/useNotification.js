import React from "react";

// MDN : https://developer.mozilla.org/ko/docs/Web/API/notification
export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options); //option ex. body, icon..etc
    }
  };
  return fireNotif;
};


//Example
function App() {
  const triggerNotif = useNotification("hi there", { body: "mumu loves you" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}