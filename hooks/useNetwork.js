import React, { useEffect, useState } from "react";

//오프라인인 경우, 온라인인 경우
export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status; // status = boolean 
};

//Example
const App = () => {
  const handleNetworkChange = online => {
    online && console.log("online");
    !online && console.log("offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "online" : "offline"}</h1>
    </div>
  );
}