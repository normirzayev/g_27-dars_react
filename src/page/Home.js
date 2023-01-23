import { useState } from "react";

function Home() {
  const [count, setCount] = useState({ sanoq: 0 });

  let plusFunc = () => {
    setCount({ ...count, sanoq: count.sanoq + 1 });
  };
  let minusFunc = () => {
    if (count.sanoq > 0) {
      setCount({ ...count, sanoq: count.sanoq - 1 });
    } else {
      alert("noldan kam bo'lmaydi");
    }
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={plusFunc}>plus</button>
      <h1>{count.sanoq}</h1>
      <button onClick={minusFunc}>minus</button>
    </>
  );
}
export default Home;
