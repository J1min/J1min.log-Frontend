import React from "react";
import type { NextPage } from "next";
import Header from "../components/header";
import Upper from "../components/header/upper";

const HeaderContainer: NextPage = () => {
  return (
    <section id={`header`}>
      <Upper />
      <Header />
    </section>
  );
};

export default HeaderContainer;
