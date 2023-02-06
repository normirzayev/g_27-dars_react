import { useState } from "react";

let Test = () => {
  let m = false;

  const [p, setP] = useState(true);
  let handleConsole = () => {
    setP(!p);
    // if (p) {
    //   setP(false);

    //   console.log('lorem');
    // } else {
    //   setP(true);
    // }
    console.log(p);
  };
  return (
    <>
      <button onClick={handleConsole} className={p ? "btn" : ""}>
        click me
      </button>
    </>
  );
};

export default Test;
