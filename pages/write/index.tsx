import React from "react";
import type { NextPage } from "next";
import WritePage from "../../components/write/editor";

const Write: NextPage = () => {
  return (
    <section id="write">
      <WritePage />
    </section>
  );
};

export default Write;
