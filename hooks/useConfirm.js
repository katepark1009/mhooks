import React from "react";

export const useConfirm = (message ="", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") { //필수
    return;
  }
  if (onCancel && typeof onCancel !== "function") { //필수 아님
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};


const App = () => {
  const deleteWorld = () => console.log("delete");
  const abort = () => console.log("aborted");

  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
