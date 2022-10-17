import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/test";

const Test: NextPage = () => {
  getUserInfo().then((response) => {
    console.log(response);
  });
  return <main>테스트중입니다</main>;
};

export default Test;
