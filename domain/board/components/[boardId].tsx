import React from "react";
import type { NextPage } from "next";
import {
  BoardContent,
  BoardTime,
  BoardTitle,
  BoardHead,
  WriterInfoContainer,
} from "./[boardId].style";
import "highlight.js/styles/atom-one-dark.css";

import hljs from "highlight.js";
import { BoardDataType, IndividualBoardPropsType } from "../interface";
import { getIndividualBoard } from "../api";

hljs.configure({
  languages: ["typescript", "javascript", "python", "java", "cpp"],
});

const IndividualBoard: NextPage<IndividualBoardPropsType> = ({
  router,
  boardId,
}) => {
  const [data, setData] = React.useState<BoardDataType>();
  const [time, setTime] = React.useState<string[] | undefined>();

  React.useEffect(() => {
    if (router.isReady) {
      getIndividualBoard(boardId).then((response) => {
        if (response.code !== 404) {
          setData(response.boardData);
          setTime(response.boardData?.created_at.split(":"));
        }
      });
    }
  }, [boardId, router]);

  return (
    <main>
      {data ? (
        <>
          <BoardHead>
            <BoardTitle>{data.board_title}</BoardTitle>
            <WriterInfoContainer>
              <BoardTime>
                {time![0]}시 {time![1]}분
              </BoardTime>
            </WriterInfoContainer>
          </BoardHead>
          <BoardContent dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};
export default IndividualBoard;
