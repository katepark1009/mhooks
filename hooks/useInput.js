import React, { useState } from 'react'

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); 
      //validator 값(T/F)에 따라 업데이트 될지 말지 체크
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//Example
const App = () => {

  const maxLen = value => value.length < 10; //validator for 'name'
  const noAt = value => !value.includes("@"); //validator for 'nameTwo'

  const name = useInput("Mr.", maxLen);
  const nameTwo = useInput("Ms.", noAt);

  return (
    <div className="App">
      <input placeholder="Name" {...name} />
      <input placeholder="Name" {...nameTwo} />
      {/* {...name}은 useInput에서 리턴한 { value }...즉, value = {name.value} 와 같음 */}
    </div>
  );
}
