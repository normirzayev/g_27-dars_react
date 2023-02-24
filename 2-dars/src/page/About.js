import { useState } from "react";
import Swal from "sweetalert2";

function About() {
  const [tableBollean, setTableBollean] = useState(false);
  const [search, setSearch] = useState("");
  const [inputData, setInputData] = useState({
    soni: 0,
    like: false,
    id: "",
    nomi: "eringijb",
    haqida: "vreger",
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
    inputClear();
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
    if (inputData.id === "") {
      setMalumotlar([
        ...malumotlar,
        { ...inputData, id: new Date().getTime() },
      ]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "malumot qo'shildi",
        showConfirmButton: false,
        timer: 2000,
      });
      inputClear();
    } else {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setMalumotlar(
            malumotlar.map((val) => (val.id === inputData.id ? inputData : val))
          );
          inputClear();
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          setTableBollean(true);
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
    setTableBollean(false);
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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ha o'chirilsin",
      cancelButtonText: "bekor qilish",
    }).then((result) => {
      if (result.isConfirmed) {
        setMalumotlar(malumotlar.filter((val) => val.id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  function reset() {
    setMalumotlar([]);
  }

  const handledit = (item) => {
    setTableBollean(true);
    setInputData(item);
  };

  return (
    <>
      <div className="aboutForm">
        <button
          onClick={handleTale}
          style={{ backgroundColor: tableBollean ? "red" : "blue" }}
        >
          {tableBollean ? "table" : "form"}
        </button>

        <div>
          <input
            style={{ width: "300px", margin: "10px" }}
            type="text"
            placeholder="search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

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
                {inputData.id === "" ? "send" : "save"}
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
                {malumotlar.length > 0 &&
                malumotlar.filter((obj) => {
                  if (search === "") {
                    return obj;
                  } else if (
                    obj.nomi
                      .toLowerCase()
                      .includes(search.toLowerCase().trim()) ||
                    obj.haqida
                      .toLowerCase()
                      .includes(search.toLowerCase().trim()) ||
                    obj.narxi.toString().includes(search.toLowerCase().trim())
                  ) {
                    return obj;
                  }
                }).length > 0 ? (
                  malumotlar
                    .filter((obj) => {
                      if (search === "") {
                        return obj;
                      } else if (
                        obj.nomi
                          .toLowerCase()
                          .includes(search.toLowerCase().trim()) ||
                        obj.haqida
                          .toLowerCase()
                          .includes(search.toLowerCase().trim()) ||
                        obj.narxi
                          .toString()
                          .includes(search.toLowerCase().trim())
                      ) {
                        return obj;
                      }
                    })
                    .map((item, index) => (
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
                          <button onClick={() => plusFunc(item.id)}>
                            plus
                          </button>
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
                          <button
                            style={{ background: "green" }}
                            onClick={() => handledit(item)}
                          >
                            edit
                          </button>
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
            <button onClick={reset}>reset</button>
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
