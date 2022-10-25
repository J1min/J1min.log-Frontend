import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType, BoardDataType } from "../../interface/board";
import { getIndividualBoard } from "../../api/board";
import useDidMountEffect from "../../hooks/useDidmountEffect";
import NotFoundPage from "../../pages/404";
import { BoardContent, BoardTitle } from "./[boardId].style";

const IndividualBoard: NextPage<IndividualBoardPropsType> = ({
  router,
  boardId,
}) => {
  const [data, setData] = React.useState<BoardDataType>();

  useDidMountEffect(() => {
    getIndividualBoard(boardId).then((response) => {
      if (response.code !== 404) {
        setData(response.boardData);
      }
    });
  }, [router.isReady]);

  return (
    <>
      {data ? (
        <main>
          <BoardTitle>{data.board_title}</BoardTitle>
          <BoardContent>{data.content}</BoardContent>
        </main>
      ) : (
        <BoardTitle>글이 없습니다</BoardTitle>
      )}
    </>
  );
};
export default IndividualBoard;
