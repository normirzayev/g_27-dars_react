import { Button, Input } from "./components/Button";
import rasm1 from "../img/rasm1.png";
import rasm2 from "../img/rasm2.png";
import rasm3 from "../img/rasm3.png";
import Malumotlar from "./components/Malumotlar";
function Main() {
  let malumot = [
    {
      id: 1,
      name: "jasur",
      familya: "umarov",
      yosh: 75,
      rasm: rasm1,
    },
    {
      id: 2,
      name: "xusnida",
      familya: "karimova",
      yosh: 25,
      rasm: rasm2,
    },
    {
      id: 3,
      name: "laylo",
      familya: "umarova",
      yosh: 10,
      rasm: rasm3,
    },
    {
      id: 4,
      name: "karim",
      familya: "umarov",
      yosh: 17,
      rasm: rasm3,
    },
    {
      id: 100,
      name: "jasur",
      familya: "umarov",
      yosh: 19,
      rasm: rasm3,
    },
    {
      id: 9,
      name: "jasur",
      familya: "umarov",
      yosh: 19,
      rasm: rasm2,
    },
    {
      id: 10,
      name: "jasur",
      familya: "umarov",
      yosh: 19,
      rasm: rasm1,
    },
  ];

  return (
    <>
      {/* elementga style berish */}
      <h1 style={{ color: "red", backgroundColor: "blue" }}>Main</h1>
      <Button text={"send"} />
      <Button text="jo'natish" />
      <Button text="modal" />
      <Input
        typedewhjf={"email"}
        placehewhjfvcweolder={"email typing..."}
        class1="email_kirit"
      />
      <Input
        typedewhjf={"password"}
        placehewhjfvcweolder={"password typing..."}
        class1="parol"
      />

      {/* elementga style berish object bilan */}
      <h1 style={{ ...styleText }}>malumotlar</h1>
      <Malumotlar data={malumot} />
    </>
  );
}

export default Main;

// elementlar uchun style objecti qollash uchun uni ... orqali bo'lib olish kerak
let styleText = {
  fontSize: "50px",
  color: "yellow",
};
