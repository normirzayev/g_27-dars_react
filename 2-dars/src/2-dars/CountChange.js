import { useState } from "react";

function CountChange() {
  // let bir = 5;
  const [sanoq, setSanoq] = useState(8);
  const [sanoq1, setSanoq1] = useState({ count: 5 });
  let plus = () => {
    // bir += 1;
    if (sanoq < 10) setSanoq(sanoq + 1);
  };
  let minus = () => {
    if (sanoq > 0) setSanoq(sanoq - 1);
    else alert("manfiy bolmaydi");
  };

  //  object count (-- or ++)

  let plus1 = () => {
    if (sanoq1.count < 10) {
      setSanoq1({ ...sanoq1, count: sanoq1.count + 1 });
    } else alert("10 dan katta bolmaydi");
  };
  let minus1 = () => {
    if (sanoq1.count > 0) {
      setSanoq1({ ...sanoq1, count: sanoq1.count - 1 });
    } else {
      alert("manfiy bolmaydi");
    }
  };

  return (
    <>
      <button
        onClick={plus}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          outline: "none",
          borderRadius: "5px",
          padding: "10px 25px",
          cursor: "pointer",
        }}
      >
        plus
      </button>
      <h2 style={{ ...styleH2 }}>
        count: <span> {sanoq} </span>
      </h2>
      {/* <p style={{ ...styleH2, color: "green" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, error?
      </p> */}
      <button
        onClick={minus}
        style={{
          background: "red",
          color: "white",
          cursor: "pointer",
          border: "none",
          outline: "none",
          padding: "10px 25px",
          borderRadius: "5px",
        }}
      >
        minus
      </button>
      <h1>object count plus minus</h1>
      <br />
      <br />
      <div>
        <button
          onClick={plus1}
          style={{
            background: "blue",
            color: "white",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            padding: "10px 25px",
            cursor: "pointer",
          }}
        >
          plus
        </button>
        <h2 style={{ ...styleH2, color: "green" }}>
          count: <span> {sanoq1.count} </span>
        </h2>
        <button
          onClick={minus1}
          style={{
            background: "red",
            color: "white",
            cursor: "pointer",
            border: "none",
            outline: "none",
            padding: "10px 25px",
            borderRadius: "5px",
          }}
        >
          minus
        </button>
      </div>
    </>
  );
}
export default CountChange;

let styleH2 = {
  background: "yellow",
  fontSize: "35px",
  color: "red",
};
