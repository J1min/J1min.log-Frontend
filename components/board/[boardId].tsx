import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType, BoardDataType } from "../../interface/board";
import { getIndividualBoard } from "../../api/board";
import { BoardContent, BoardTitle } from "./[boardId].style";

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
    <>
      {data ? (
        <main>
          <BoardTitle>{data.board_title}</BoardTitle>
          <BoardContent dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>
      ) : (
        <BoardTitle>글이 없습니다</BoardTitle>
      )}
    </>
  );
};
export default IndividualBoard;
