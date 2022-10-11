import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/response/getTest";

const Test: NextPage = () => {
  const [data, setData] = React.useState<string>("");

  console.log(
    getUserInfo().then((response) => {
      console.log(response);
      setData(response.이즈나);
    })
  );
  return <main>{data}</main>;
};

export default Test;
