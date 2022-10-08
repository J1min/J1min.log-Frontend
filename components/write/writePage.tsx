import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("./editor"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const WritePage: NextPage = () => {
  return (
    <main>
      <PostEditor />
    </main>
  );
};

export default WritePage;
