import { NextRouter } from "next/router";
import { dynamicRouteType } from "..";

export interface IndividualBoardPropsType {
  router: NextRouter;
  boardId: dynamicRouteType;
}

export interface GetIndividualBoardType {
  boardId: dynamicRouteType;
}

export interface BoardDataType {
  board_id: number;
  board_title: string;
  content: string;
  created_at: string;
  user_id: number;
}

export interface GetIndividualBoardResponseType {
  response: string;
  code: number;
  boardData?: BoardDataType;
}
