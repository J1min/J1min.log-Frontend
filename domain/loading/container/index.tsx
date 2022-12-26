import React from "react";
import type { NextPage } from "next";
import Loading from "../components";

const LoadingWrapper: NextPage = () => {
  return (
    <section id="loading">
      <Loading />
    </section>
  );
};
export default LoadingWrapper;
