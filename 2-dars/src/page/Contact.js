import { useEffect, useRef } from "react";

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

  return (
    <>
      <button onClick={button}>click</button>
      <h1 ref={text} className="salom">
        Contact
      </h1>
      <input ref={input1} type="text" />
    </>
  );
}

export default Contact;
