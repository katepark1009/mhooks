import React, { useEffect, useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [aNumber, setaNumber] = useState(0)
  const sayHello = () => { console.log('hello') }

  useEffect(sayHello, [])
 
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}

// useEffect = componentDidMount, componentWillUnMount, componentDidUpdate

//= componentDidMount 에만 사용하고 싶을때는 빈 배열 []

//= componentDidMount, componentDidUpdate 에 사용하고 싶은데 
//  특정 변수값 변할때만 업데이트 하고 싶을때 [number] 이런식으로 특정 값 배열에 넣어줌.