import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const DataContext = React.createContext();
export default function ContextProvider({ children }) {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("localUSer")) || []
  );

  let portalMap = useNavigate();
  let portalData = useNavigate();

  function localRefresh() {
    setLocalData(JSON.parse(localStorage.getItem("localUSer")) || []);
  }

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    rasm: "",
  });

  function inputClear() {
    setInputData({
      id: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      rasm: "",
    });
  }

  let getInputData = (e) => {
    let { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  let sendData = () => {
    if (inputData.id === "") {
      if (localStorage.getItem("localUSer")) {
        localStorage.setItem(
          "localUSer",
          JSON.stringify([
            ...localData,
            { ...inputData, id: new Date().getTime() },
          ])
        );
      } else {
        localStorage.setItem(
          "localUSer",
          JSON.stringify([{ ...inputData, id: new Date().getTime() }])
        );
      }
    } else {
      localStorage.setItem(
        "localUSer",
        JSON.stringify(
          localData.map((elem) => (elem.id === inputData.id ? inputData : elem))
        )
      );
    }
    portalMap("/localMap");
    inputClear();
    localRefresh();
  };

  // localStorage dan bir malumot o'chirish
  let ochirish = (id) => {
    localStorage.setItem(
      "localUSer",
      JSON.stringify(localData.filter((elem) => elem.id !== id))
    );
    localRefresh();
  };

  // localStoragedagi malumotni tahrirlash
  let editFunc = (item) => {
    setInputData(item);
    portalData("/localData");
  };

  return (
    <DataContext.Provider
      value={{
        getInputData,
        inputData,
        sendData,
        localData,
        ochirish,
        editFunc,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
