import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const useReload: NextPage = () => {
  const router = useRouter();
  router.reload();
  return <main>F5</main>;
};

export default useReload;
