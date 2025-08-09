// import { useContext } from "react";
// import UserContex from "../utils/UserContex";

const Contact = () => {
  // const { setuserName, loggedINuser } = useContext(UserContex);
  // console.log(setuserName, "hii");

  // const handleclick = () => {
  //   let Newval = Number(userName + 1);
  //   setuserName(Newval);
  // };

  return (
    <div>
      <h1 className="Heading-1">Contact Us</h1>
      {/* <input
        className="border outline-none p-2"
        value={loggedINuser}
        onChange={(e) => setuserName(e.target.value)}
      /> */}
      {/* <button onClick={handleclick}>click</button> */}
    </div>
  );
};

export default Contact;
