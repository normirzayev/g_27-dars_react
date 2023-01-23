import { Slider } from "@mui/material";
import { useState } from "react";
import Range from "./Range";

let Count = ({ malumot, plusFunc, minusFunc }) => {
  let cotyMassiv = ["", "poliz", "meva", "sabzavot"];
  let colorMassiv = ["red", "yellow", "blue", "green"];
  const [cotyData, setCotyData] = useState("");
  const [colorData, setColorData] = useState("");
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="cotyGory">
        {cotyMassiv.map((item, index) => {
          return (
            <div className="cotyItme" key={index}>
              <button
                onClick={() => setCotyData(item)}
                style={{ background: item === cotyData ? "red" : "" }}
              >
                {item !== "" ? item : "all"}
              </button>
            </div>
          );
        })}
      </div>

      <div
        className="chekColor"
        style={{ display: "flex", gap: "20px", margin: "20px" }}
      >
        {colorMassiv.map((chek) => (
          <div>
            <input
              type="radio"
              name="color"
              onClick={() => setColorData(chek)}
              style={{
                boxShadow: chek === colorData ? `0 0 10px ${colorData} ` : "",
                width: "40px",
                height: "40px",
              }}
            />
          </div>
        ))}
        <button onClick={() => setColorData("")}>Clear color</button>
      </div>

      <Range value={value} handleChange={handleChange} />
      <div className="cardBody">
        {malumot.filter((val) => {
          if (
            value[0] !== "" &&
            value[1] !== "" &&
            val.coty
              .trim()
              .toLowerCase()
              .includes(cotyData.trim().toLowerCase()) &&
            val.rangi
              .trim()
              .toLowerCase()
              .includes(colorData.trim().toLowerCase()) &&
            val.narx > value[0] &&
            val.narx < value[1]
          ) {
            return val;
          }
        }).length > 0
          ? malumot
              .filter((val) => {
                if (
                  value[0] !== "" &&
                  value[1] !== "" &&
                  val.coty
                    .trim()
                    .toLowerCase()
                    .includes(cotyData.trim().toLowerCase()) &&
                  val.rangi
                    .trim()
                    .toLowerCase()
                    .includes(colorData.trim().toLowerCase()) &&
                  val.narx > value[0] &&
                  val.narx < value[1]
                ) {
                  return val;
                }
              })
              .map((item) => (
                <div className="card" key={item.id}>
                  <figure>
                    <img src={item.rasm} alt={item.name} />
                  </figure>
                  <div className="cartText">
                    <h2> {item.name} </h2>
                    <p>
                      {item.about.length > 50
                        ? item.about.slice(0, 50)
                        : item.about}
                    </p>
                    <hr />
                    <h4> cotygory: {item.coty} </h4>
                    <h2> narxi: {item.narx}$ </h2>
                    <h2> rangi: {item.rangi} </h2>
                  </div>
                  <div className="cartBtn">
                    <button onClick={() => plusFunc(item)}>plus</button>
                    <p>{item.sanoq}</p>
                    <button onClick={() => minusFunc(item)}>minus</button>
                  </div>
                </div>
              ))
          : "malumot mavjud emas"}
      </div>
    </>
  );
};

export default Count;
