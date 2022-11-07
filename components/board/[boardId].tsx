import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType, BoardDataType } from "../../interface/board";
import { getIndividualBoard } from "../../api/board";
import {
  BoardContent,
  BoardTime,
  BoardTitle,
  BoardHead,
  WriterInfoContainer,
} from "./[boardId].style";

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
