import React from "react";
import type { NextPage } from "next";
import { Board } from "./boardContainer.style";
import Post from "../components/board/post";

const BoardContainer: NextPage = () => {
  return (
    <Board>
      <Post />
    </Board>
  );
};
export default BoardContainer;
