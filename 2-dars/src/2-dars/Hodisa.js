import { useState } from "react";

let Hodisa = () => {
  // let [text, kwerjvh] = useState(['fewj', 'greg', 'gerg'])
  // let [text, kwerjvh] = useState(
  //   {vkewjb:'gregv', greg:"ger"}
  // )

  const [boolean, setBoolean] = useState(true);

  // let boolean = false;

  // function matnChiqar() {
  //   if (boolean === true) {
  //     console.log(boolean);
  //     boolean = false;
  //   } else {
  //     console.log(boolean);
  //     boolean = true;
  //   }
  // }

  let matnChiqar = () => {
    setBoolean(!boolean);

    // if (boolean) {
    //   setBoolean(false);
    // } else {
    //   setBoolean(true);
    // }
  };

  return (
    <>
      <button onClick={matnChiqar}>click</button>
      <h1> {boolean ? "salom" : "hello"} </h1>

      <div className={boolean ? "box" : "box box1"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat,
        debitis laborum porro reprehenderit ex?
      </div>
    </>
  );
};
export default Hodisa;
