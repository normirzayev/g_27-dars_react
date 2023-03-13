import React, { useContext } from "react";
import { DataContext } from "../context/Context";

export const LocalMap = () => {
  let { localData, ochirish,editFunc } = useContext(DataContext);
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>password</th>
            <th>image</th>
            <th> action </th>
          </tr>
        </thead>
        <tbody>
          {localData.length > 0 ? (
            localData.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.surname}</td>
                <td>{item?.email}</td>
                <td>{item?.password}</td>
                <td>
                  <img src={item?.rasm} alt={item?.name} />
                </td>

                <td>
                  <button
                    style={{ background: "green" }}
                    onClick={() => editFunc(item)}
                  >
                    edit
                  </button>
                  <button
                    style={{ background: "red" }}
                    onClick={() => ochirish(item.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan={10}>no data...</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
