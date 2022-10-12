import React from "react";
import type { NextPage } from "next";
import Upper from "../../components/header/upper";

const Test: NextPage = () => {
  const [data, setData] = React.useState<string>("");

  return (
    <main>
      <Upper />
    </main>
  );
};

export default Test;
