import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const WritePage: NextPage = () => {
  return (
    <main>
      <Editor />
    </main>
  );
};

export default WritePage;
