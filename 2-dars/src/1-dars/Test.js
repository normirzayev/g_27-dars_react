let Test = ({ matn, classNomi, malumot }) => {
  // console.log(prop.matn);
  // let { matn, classNomi} = prop;

  console.log(malumot);

  return (
    <>
      <button className={classNomi}>{matn}</button>
    </>
  );
};
export default Test;
