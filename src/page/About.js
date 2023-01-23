import { useState } from "react";
import olma from "../img/rasm1.png";
import shaftoli from "../img/rasm2.png";
import banan from "../img/rasm3.png";
import nok from "../img/rasm2.png";
import anor from "../img/rasm1.png";
import Count from "../components/Count";
function About() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "olma",
      about:
        "shirin meva Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia ipsam a, esse dolore recusandae.",
      rasm: olma,
      sanoq: 0,
      coty: "meva",
      narx: 75,
      rangi:"blue"
    },
    {
      id: 2,
      name: "karam",
      about:
        "tukli shaftoli Lorem ipsum dolor sit amet consectetur adipisicing elit",
      rasm: shaftoli,
      sanoq: 0,
      coty: "poliz",
      narx: 35,
      rangi:"green"
    },
    {
      id: 3,
      name: "banan",
      about: "sariq meva Lorem ipsum dolor sit amet consectetur recusandae.",
      rasm: banan,
      sanoq: 0,
      coty: "meva",
      narx: 50,
      rangi:"yellow"
    },
    {
      id: 4,
      name: "sabzi",
      about: "mazali meva Lorem ipsum esse dolore recusandae.",
      rasm: nok,
      sanoq: 0,
      coty: "sabzavot",
      narx: 10,
      rangi:"red"
    },
    {
      id: 5,
      name: "oshqovoq",
      about: "qizil meva Rerum quia ipsam a, esse dolore recusandae.",
      rasm: anor,
      sanoq: 0,
      narx: 60,
      coty: "poliz",
      rangi:"red"
    },
  ]);

  let plusFunc = (item) => {
    setData(
      data.map((val) =>
        val.id === item.id && val.sanoq < 15
          ? { ...val, sanoq: val.sanoq + 1 }
          : val
      )
    );
  };
  let minusFunc = (item) => {
    setData(
      data.map((val) =>
        val.id === item.id && val.sanoq > 0
          ? { ...val, sanoq: val.sanoq - 1 }
          : val
      )
    );
  };

  return (
    <>
      <Count malumot={data} plusFunc={plusFunc} minusFunc={minusFunc} />
    </>
  );
}
export default About;
