import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/test/getTest";

const Test: NextPage = () => {
  const [data, setData] = React.useState<string>("");

  getUserInfo().then((response) => {
    setData(response.이즈나);
  });

  return <main>{data}</main>;
};

export default Test;
