import { MENU_API } from "./utils/mockdata";
import { useState, useEffect } from "react";

const useRestaruantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //     try {
  //       const response = await fetch(
  //         `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const json = await response.json();
  //       setResInfo(json.data);
  //     } catch (error) {
  //       console.error("Fetching menu failed: ", error);
  //     }
  //   }, [resId]);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaruantMenu;
