import { useEffect, useRef, useState } from "react";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import AirIcon from "@mui/icons-material/Air";
import Slider1 from "../component/Slider1";
function Contact() {
  // let text = document.querySelector('h1')

  let text = useRef();
  let input1 = useRef();
  let button = () => {
    console.log(text.current.className);
    console.log(input1.current.value);
  };

  useEffect(function () {
    input1.current.focus();
    input1.current.style.color = "red";
  });

  const [btn, setBtn] = useState([]);
  // const [btn, setBtn] = useState(Array(10).fill("click"));
  const [btnAct, setBtnAct] = useState(0);

  let btnActive = (index) => {
    setBtnAct(index);
  };

  function arrayFill(son) {
    let m = [];
    for (let index = 0; index < son; index++) {
      // setBtn([...btn, (btn[index] = "s")]);
      m.push(` click ${index + 1} `);
    }
    return m;
  }
  return (
    <>
      <button onClick={button}>click</button>
      <h1 ref={text} className="salom">
        Contact
      </h1>
      <input ref={input1} type="text" />

      {arrayFill(10).map((item, index) => (
        <button
          key={index}
          button={"button"}
          onClick={() => btnActive(index)}
          className={index === btnAct ? "btnActive1" : ""}
        >
          {item}
        </button>
      ))}

      <div className="box">
        <Slider1 />
      </div>
    </>
  );
}

export default Contact;
