import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import IndividualBoard from "../../components/board/[boardId]";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dynamicRouteType } from "../../interface";

const BoardPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const boardId: dynamicRouteType = route.boardId;

  return (
    <>
      <Head>
        <title>{boardId}</title>
      </Head>
      <section id={`BoardPage`}>
        <IndividualBoard boardId={boardId} router={router} />
      </section>
    </>
  );
};
export default BoardPage;
