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

  const [date, setDate] = useState({ to: "2022-11-31", from: "2023-11-31" });
  let handleDate = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  let to = new Date("2023-01-04");
  let from = new Date("2023-01-11");
  console.log(to < new Date("2023-01-05") && new Date("2023-03-05") < from);
  console.log(
    malumot.filter(
      (val) =>
        new Date(date?.to) < new Date(val.sana) &&
        new Date(val.sana) < new Date(date?.from)
    )
  );

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
        {colorMassiv.map((chek, index) => (
          <div key={index}>
            <input
              type="radio"
              name="color"
              onClick={() => setColorData(chek)}
              style={{
                boxShadow: chek === colorData ? `0 0 10px ${colorData}` : "",
                width: "40px",
                height: "40px",
              }}
            />
          </div>
        ))}
        <button onClick={() => setColorData("")}>Clear color</button>
      </div>

      <Range value={value} handleChange={handleChange} />

      <label>to: </label>
      <input value={date.to} onChange={handleDate} type="date" name="to" />
      <label>from: </label>
      <input value={date.from} onChange={handleDate} type="date" name="from" />

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
            val.narx < value[1] &&
            new Date(date?.to) <= new Date(val.sana) &&
            new Date(val.sana) <= new Date(date?.from)
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
                  val.narx < value[1] &&
                  new Date(date?.to) <= new Date(val.sana) &&
                  new Date(val.sana) <= new Date(date?.from)
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

                    <h3> sana: {item.sana} </h3>
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
