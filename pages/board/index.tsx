import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import BoardContainer from "../../container/boardContainer";

const Board: NextPage = () => {
  return (
    <>
      <Head>
        <title>J1min.log</title>
      </Head>
      <section id={`board`}>
        <BoardContainer />
      </section>
    </>
  );
};
export default Board;
