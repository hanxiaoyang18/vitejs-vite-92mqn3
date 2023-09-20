import { useState } from 'react';

export default function Compteur() {
  const [count, setCount] = useState(10);

  const handlerClickPlus = function () {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handlerClickMoins = function () {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerClickMoins}>Click -</button>
      <button onClick={handlerClickPlus}>Click +</button>
    </>
  );
}
