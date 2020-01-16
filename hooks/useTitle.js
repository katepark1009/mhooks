import React, { useEffect, useState } from 'react'

export const useTitle = initialTitie => {
  const [title, setTitle] = useState(initialTitie);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); //<title> 헤더에 있는.
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]); //title값이 변하면 updateTitle 함수가 실행됨
  return setTitle;
};


//Example
const App = () => {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}