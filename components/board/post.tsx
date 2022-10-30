import React from "react";
import type { NextPage } from "next";
import { getAllBoard } from "../../api/board";

const Post: NextPage = () => {
  getAllBoard().then((response) => {
    console.log(response);
  });
  return <main>Post</main>;
};
export default Post;
