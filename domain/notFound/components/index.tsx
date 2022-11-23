import React from "react";
import type { NextPage } from "next";
import { NotFoundWrapper, NotFoundButton } from "./index.style";
import { useRouter } from "next/router";
import Loading from "../../loading/components";

const NotFound: NextPage = () => {
  const router = useRouter();

  const goMain = () => {
    router.push("/");
  };

  const goBack = () => {
    router.back();
  };

  return (
    <NotFoundWrapper>
      <h2>페이지를 찾을 수 없습니다</h2>
      <Loading />
      <NotFoundButton onClick={goMain}>메인으로 돌아가기</NotFoundButton>
      <NotFoundButton onClick={goBack}>바로 전으로 돌아가기</NotFoundButton>
    </NotFoundWrapper>
  );
};

export default NotFound;
