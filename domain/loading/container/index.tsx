import React from "react";
import type { NextPage } from "next";
import LoadingProvider from "../components";

const LoadingContainer: NextPage = () => {
  return (
    <section>
      <LoadingProvider />
    </section>
  );
};
export default LoadingContainer;
