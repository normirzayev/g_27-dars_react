import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LikeComponent from "../component/LikeComponent";
import Cart from "../component/cart";
import { Button } from "@mui/material";
function Blog() {
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

  const [cart, setCart] = useState([]);
  const [cartBool, setCartBoll] = useState(true);
  function cartBollFunc() {
    setCartBoll(!cartBool);
  }

  function likeFunc(item) {
    setMalumotlar(
      malumotlar.map((element) =>
        element.id === item.id ? { ...element, like: !element.like } : element
      )
    );
  }

  const [inputData, setInputData] = useState({
    soni: 0,
    like: false,
    id: "",
    nomi: "",
    haqida: "",
    chegirma: "",
    narxi: "",
  });

  function tozalInput() {
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

  // inputdan malumot olish function ni
  let inputChange = (e) => {
    // inputData["nomi"]
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  let handleRasm = (e) => {
    console.log();
    setInputData({
      ...inputData,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };

  function deleteFunc(id) {
    setMalumotlar(malumotlar.filter((val) => val.id !== id));
  }

  let handleSend = (e) => {
    e.preventDefault();
    if (inputData.id === "") {
      setMalumotlar([
        ...malumotlar,
        { ...inputData, id: new Date().getTime() },
      ]);
    } else {
      setMalumotlar(
        malumotlar.map((element) =>
          element.id === inputData.id ? inputData : element
        )
      );
    }
    tozalInput();
  };

  function editFunc(item) {
    setInputData(item);
    console.log(inputData);
  }

  function cartItemToArray(item) {
    if (cart.filter((element) => element.id === item.id).length === 0) {
      setCart([...cart, item]);
    } else {
      alert("bu mahsulot bor");
    }
  }

  return (
    <>
      <div className="form_oyna">
        <button>
          <FavoriteIcon />
          <span>
            {malumotlar.filter((element) => element.like === true).length}
          </span>
        </button>

        <button onClick={cartBollFunc}> Cart  <span> {cart.length} </span> </button>

        <Cart cart={cart} cartBool={cartBool} setCartBoll={setCartBoll} />

        <form className="aboutForm" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="nomi"
            name="nomi"
            value={inputData.nomi}
            onChange={inputChange}
          />
          <input
            type="text"
            placeholder="haqida"
            name="haqida"
            value={inputData.haqida}
            onChange={inputChange}
          />
          <input
            type="number"
            placeholder="narxi"
            name="narxi"
            value={inputData.narxi}
            onChange={inputChange}
          />
          <input
            type="number"
            placeholder="chegrima"
            name="chegirma"
            onChange={inputChange}
            value={inputData.chegirma}
          />
          <input type="file" onChange={handleRasm} />
          <button className="sendBtn" type="submit">
            {inputData.id === "" ? "send" : "save"}
          </button>
        </form>
      </div>

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
            <th>like</th>
            <th>cart</th>
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
                  {(item.narxi - (item.narxi / 100) * item.chegirma).toFixed(2)}
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
                  <button>plus</button>
                  <span className="item_soni">{item.soni}</span>
                  <button>minus</button>
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
                    onClick={() => editFunc(item)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => likeFunc(item)}>
                    {item.like ? "like" : "dislike"}
                  </button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    onClick={() => cartItemToArray(item)}
                  >
                    cart
                  </Button>
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
      <LikeComponent data={malumotlar} />
    </>
  );
}

export default Blog;
