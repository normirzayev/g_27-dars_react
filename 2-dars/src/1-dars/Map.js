import React from "react";
import Test from "./Test";
function Map(prop) {
  let { malumot } = prop;
  let text = "salom";
  return (
    <>
      {malumot.map((item, index) => {
        return (
          <tr key={item.id}>
            <th> {index + 1} </th>
            <td> {item.nomi} </td>
            <td> {item.marka} </td>
            <td> {item.rangi} </td>
            <td> {item.metall} </td>
          </tr>
        );
      })}

      <Test malumot={text} />
    </>
  );
}

export default Map;
