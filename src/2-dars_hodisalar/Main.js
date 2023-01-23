import Test from "./components/Tes";
function Main() {
  return (
    <>
      <Test />
    </>
  );
}
export default Main;

export function FormData(prop) {
  // export function FormData({ vjerbv, fam}) {
  // console.log(vjerbv, fam);

  // let { vjerbv, fam } = prop;
  // console.log(vjerbv, fam);
  return (
    <>
      <form>
        <input type="text" placeholder="name" />
        <button>send</button>
      </form>
    </>
  );
}

export const CardMap = ({ people }) => {
  return (
    <>
      {people.map((item, index) => (
        <div key={item.id}>
          <h1>
            {index + 1} name:{item.name} familya: {item.familya}
          </h1>
        </div>
      ))}
    </>
  );
};
