import { useState } from "react";

function About() {
  const [tableBollean, setTableBollean] = useState(false);
  const [inputData, setInputData] = useState({
    soni: 0,
    like: false,
    id: "",
    nomi: "",
    haqida: "",
    chegirma: "",
    narxi: "",
  });
  function inputClear() {
    setInputData({
      soni: 0,
      like: false,
      id: "",
      nomi: "",
      haqida: "",
      chegirma: "",
      narxi: "",
    });
  }
  const [malumotlar, setMalumotlar] = useState([
    {
      id: 1,
      nomi: "karam",
      haqida: "gul karam",
      narxi: 35,
      chegirma: 10,
      like: false,
      soni: 0,
    },
    {
      id: 2,
      nomi: "sabzi",
      haqida: "sariq sabzi",
      narxi: 40,
      chegirma: 13,
      like: false,
      soni: 0,
    },
    {
      id: 3,
      nomi: "anjir",
      haqida: "shirin meva",
      narxi: 50,
      chegirma: 15,
      like: false,
      soni: 0,
    },
    {
      id: 4,
      nomi: "limon",
      haqida: "juda nordon",
      narxi: 80,
      chegirma: 8,
      like: false,
      soni: 0,
    },
  ]);
  let handleTale = () => {
    setTableBollean(!tableBollean);
  };

  let handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  let handleRasm = (e) => {
    setInputData({
      ...inputData,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };

  let sendFunc = () => {
    setMalumotlar([...malumotlar, { ...inputData, id: new Date().getTime() }]);
    setTableBollean(false);
    inputClear();
  };

  function plusFunc(id) {
    setMalumotlar(
      malumotlar.map((val) =>
        val.id === id ? { ...val, soni: val.soni + 1 } : val
      )
    );
  }

  function minusFunc(id) {
    // console.log(id);
    setMalumotlar(
      malumotlar.map((val) =>
        val.id === id && val.soni > 0 ? { ...val, soni: val.soni - 1 } : val
      )
    );
  }

  // malumotlarni birini o'chirish
  function deleteFunc(id) {
    setMalumotlar(malumotlar.filter((val) => val.id !== id));
  }

  return (
    <>
      <div className="aboutForm">
        <button
          onClick={handleTale}
          style={{ backgroundColor: tableBollean ? "red" : "blue" }}
        >
          {tableBollean ? "table" : "form"}
        </button>

        {tableBollean ? (
          <div className="form_oyna">
            <form>
              <input
                type="text"
                placeholder="nomi"
                name="nomi"
                value={inputData?.nomi}
                onInput={handleInput}
              />
              <input
                type="text"
                placeholder="haqida"
                name="haqida"
                value={inputData?.haqida}
                onInput={handleInput}
              />
              <input
                type="number"
                placeholder="narxi"
                name="narxi"
                onInput={handleInput}
                value={inputData?.narxi}
              />
              <input
                type="number"
                placeholder="chegrima"
                name="chegirma"
                onInput={handleInput}
                value={inputData?.chegirma}
              />
              <input type="file" onInput={handleRasm} />
              <button className="sendBtn" type="button" onClick={sendFunc}>
                send
              </button>
            </form>
          </div>
        ) : (
          <>
            <table border={1}>
              <thead>
                <tr>
                  <th>#</th>
                  <th> nomi </th>
                  <th> haqida</th>
                  <th> narxi </th>
                  <th> summa </th>
                  <th> chegrima</th>
                  <th> rasm</th>
                  <th> soni </th>
                  <th colSpan={2}> action </th>
                </tr>
              </thead>
              <tbody>
                {malumotlar.length > 0 ? (
                  malumotlar.map((item, index) => (
                    <tr key={index}>
                      <th> {index + 1} </th>
                      <td> {item.nomi} </td>
                      <td> {item.haqida} </td>
                      <td>
                        <del>{item.narxi}$</del>
                        {(
                          item.narxi -
                          (item.narxi / 100) * item.chegirma
                        ).toFixed(2)}
                        $
                      </td>
                      <td>
                        {(
                          (item.narxi - (item.narxi / 100) * item.chegirma) *
                          item.soni
                        ).toFixed(2)}
                        $
                      </td>
                      <td> {item.chegirma}% </td>
                      <td>
                        <img src={item.rasm} alt="nomi" />
                      </td>
                      <td>
                        <button onClick={() => plusFunc(item.id)}>plus</button>
                        <span className="item_soni">{item.soni}</span>
                        <button onClick={() => minusFunc(item.id)}>
                          minus
                        </button>
                      </td>
                      <td>
                        <button
                          style={{ background: "red" }}
                          onClick={() => deleteFunc(item.id)}
                        >
                          delete
                        </button>
                      </td>
                      <td>
                        <button style={{ background: "green" }}>edit</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10}> no Data... </td>
                  </tr>
                )}
              </tbody>
            </table>
            <h1>
              totalPrice:
              {malumotlar
                .reduce(
                  (a, b) =>
                    a + (b.narxi - (b.narxi / 100) * b.chegirma) * b.soni,
                  0
                )
                .toFixed(2)}
              $
            </h1>
          </>
        )}
      </div>
    </>
  );
}

export default About;
