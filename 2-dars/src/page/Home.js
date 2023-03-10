import { useContext, useState } from "react";
import { DataContext } from "../context/Context";
import React from 'react';
function Home() {
  let { m } = useContext(DataContext);

  const [data, setData] = useState([
    { id: 1, name: "panki", narx: 2, soni: 0 },
    { id: 2, name: "sprite", narx: 1.5, soni: 0 },
    { id: 3, name: "pepsi", narx: 4, soni: 0 },
    { id: 4, name: "cola", narx: 3, soni: 0 },
    { id: 5, name: "fanta", narx: 8, soni: 0 },
    { id: 6, name: "snikers", narx: 0.8, soni: 0 },
  ]);

  let plusFunc = (item) => {
    setData(
      data.map((obj) =>
        obj.id === item.id && obj.soni < 10
          ? { ...obj, soni: obj.soni + 1 }
          : obj
      )
    );
  };

  let minusFunc = (item) => {
    if (item.soni > 0) {
      setData(
        data.map((obj) =>
          obj.id === item.id ? { ...obj, soni: obj.soni - 1 } : obj
        )
      );
    } else {
      alert("error");
    }
  };

  return (
    <>
      <h1>{m}</h1>

      <div className="home">
        <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>narxi</th>
              <th>soni</th>
              <th>summasi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index}>
                <th> {index + 1} </th>
                <td> {val.name} </td>
                <td> {val.narx}$ </td>
                <td>
                  <button onClick={() => plusFunc(val)}>plus</button> {val.soni}
                  <button onClick={() => minusFunc(val)}>minus</button>
                </td>
                <td> {(val.soni * val.narx).toFixed(2)}$ </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>totalPrice: {data.reduce((a, b) => a + b.soni * b.narx, 0)}$</h1>
      </div>
    </>
  );
}

export default Home;
