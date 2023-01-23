import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FcSearch } from "react-icons/fc";
export let Button = (prop) => {
  let { text } = prop; // 1
  // console.log(prop.text, prop.text1);  // 2
  console.log(text);
  return (
    <>
      <button>{text}</button>
      <FcSearch />
    </>
  );
};

export let Input = ({ typedewhjf, placehewhjfvcweolder, class1 }) => {
  return (
    <>
      <input
        type={typedewhjf}
        placeholder={placehewhjfvcweolder}
        className={class1}
      />

      <SiHomeassistantcommunitystore className="icon" />
    </>
  );
};
