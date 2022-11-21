import { NextRouter } from "next/router";

export type dynamicRouteType = string | string[] | undefined;

export interface IndividualBoardPropsType {
  router: NextRouter;
  boardId: dynamicRouteType;
}

export interface GetIndividualBoardType {
  boardId: dynamicRouteType;
}

export interface BoardDataType {
  board_id?: number;
  board_title: string;
  content: string;
  created_at: string;
  user_id: number;
  thumbnail: string;
  description: string;
}

export interface GetIndividualBoardResponseType {
  response: string;
  code: number;
  boardData?: BoardDataType;
}

export interface PostBoardRequestType {
  user_id: number;
  content: string;
  created_at: string;
  board_title: string;
  thumbnail: string;
  description: string;
}

export interface PostBoardResponseType {
  code: number;
  response: string;
  boardData?: BoardDataType;
}

export interface EditorFormValue {
  title: string;
  content: string;
  thumbnail: string;
  description: string;
}
