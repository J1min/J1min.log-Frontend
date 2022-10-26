import { dynamicRouteType } from "../../interface";
import {
  GetIndividualBoardResponseType,
  PostBoardRequestType,
  PostBoardResponseType,
} from "../../interface/board";
import instance from "../../lib/instance";

export const getIndividualBoard = async (
  boardId: dynamicRouteType
): Promise<GetIndividualBoardResponseType> => {
  try {
    const { data } = await instance.get(`/board/${boardId}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const postBoard = async (
  boardData: PostBoardRequestType
): Promise<PostBoardResponseType> => {
  try {
    const { data } = await instance.post(`/write`, boardData);
    alert(`작성이 완료되었습니다`);
    return data;
  } catch (err) {
    throw err;
  }
};