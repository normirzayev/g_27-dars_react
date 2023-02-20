function Cart({cart, cartBool,setCartBoll}) {
  function fun() {
    setCartBoll(true)
  }
  return (
    <>
      <div className={cartBool ? 'cart' : 'cart cartActive'}>
        <button onClick={fun}>X</button>
        <div className="cartBody">
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
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item, index) => (
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
                      <button>plus</button>
                      <span className="item_soni">{item.soni}</span>
                      <button>minus</button>
                    </td>
                    <td>
                      <button
                        style={{ background: "red" }}
                        // onClick={() => deleteFunc(item.id)}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <button >
                        {item.like ? "like" : "dislike"}
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
        </div>
      </div>
    </>
  );
}
export default Cart;
