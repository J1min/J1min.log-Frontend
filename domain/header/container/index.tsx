import React from "react";
import type { NextPage } from "next";
import Upper from "../components/upper";
import Header from "../components";

const HeaderContainer: NextPage = () => {
  return (
    <section id={`header`}>
      <Upper />
      <Header />
    </section>
  );
};

export default HeaderContainer;
