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

  React.useEffect(() => {
    if (router.isReady) {
      getIndividualBoard(boardId).then((response) => {
        if (response.code !== 404) {
          setData(response.boardData);
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
              <BoardTime>{data.created_at}</BoardTime>
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
