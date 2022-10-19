import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/test";

const Test: NextPage = () => {
  getUserInfo().then((response) => {
    console.log(response);
  });
  return <section id={`test`}>테스트중입니다</section>;
};

export default Test;
