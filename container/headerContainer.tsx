import React from "react";
import type { NextPage } from "next";
import Header from "../components/header/header";
import Upper from "../components/header/upper";

const HeaderContainer: NextPage = () => {
  return (
    <section id={`Header`}>
      <Upper />
      <Header />
    </section>
  );
};

export default HeaderContainer;
