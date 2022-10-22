import React from "react";
import type { NextPage } from "next";
import NotFound from "../components/notFound";
const NotFoundPage: NextPage = () => {
  return (
    <section id={`404`}>
      <NotFound />
    </section>
  );
};

export default NotFoundPage;
