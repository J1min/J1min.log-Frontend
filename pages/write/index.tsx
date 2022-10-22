import React from "react";
import type { NextPage } from "next";
import WritePage from "../../components/write";

const Write: NextPage = () => {
  return (
    <section id={`write`}>
      <WritePage />
    </section>
  );
};

export default Write;
