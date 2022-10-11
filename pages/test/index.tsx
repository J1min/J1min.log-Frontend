import React from "react";
import type { NextPage } from "next";
import { result } from "../../api/getTest";


const Test: NextPage = () => {
  console.log(result);

  return <main></main>;
};

export default Test;
