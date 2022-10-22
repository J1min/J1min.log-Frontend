import React from "react";
import type { NextPage } from "next";
import Loading from "../components/loading";

const NotFoundPage: NextPage = () => {
  return (
    <section id={`404`}>
      <Loading />
      404 데스웅
    </section>
  );
};

export default NotFoundPage;
