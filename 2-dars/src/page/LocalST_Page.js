import { useState } from "react";

function LocalST_Page() {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("localUSer")) || []
  );

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

  let getFileData = (e) => {
    setInputData({
      ...inputData,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };

  let sendData = () => {
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
    inputClear();
    localRefresh();
  };

  return (
    <>
      <div className="localPage">
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onInput={getInputData}
            value={inputData.name}
          />
          <input
            type="text"
            placeholder="surName"
            name="surname"
            onInput={getInputData}
            value={inputData.surname}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onInput={getInputData}
            value={inputData.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onInput={getInputData}
            value={inputData.password}
          />
          <input type="file" onInput={getFileData} />
          <button type="button" onClick={sendData}>
            yuborish
          </button>
        </form>
      </div>
    </>
  );
}

export default LocalST_Page;
