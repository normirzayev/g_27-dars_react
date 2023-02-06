let Malumotlar = ({ data }) => {
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>name</th>
            <th>familya</th>
            <th>yosh</th>
            <th>rasm</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th> {index + 1} </th>
                <td>{item.name}</td>
                <td>{item.familya}</td>
                <td>{item.yosh}</td>
                <td>
                  <img src={item.rasm} alt={item.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Malumotlar;
