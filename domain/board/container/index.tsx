import React from "react";
import type { NextPage } from "next";
import { Board } from "./index.style";
import Post from "../components/post";

const BoardContainer: NextPage = () => {
  return (
    <Board>
      <Post />
    </Board>
  );
};
export default BoardContainer;
