import { postBoard } from "../../api/board";
import {
  PostBoardRequestType,
  PostBoardResponseType,
} from "../../interface/board";

export const boardPost = (
  boardData: PostBoardRequestType
): void | PostBoardResponseType => {
  postBoard(boardData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};


export const thumbnailPost = () => {

}