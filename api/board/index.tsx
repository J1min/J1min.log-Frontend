import { dynamicRouteType } from "../../interface";
import { GetIndividualBoardResponseType } from "../../interface/board";
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
