import instance from "../instance";
import { RootInfoType } from "../../interface/api/api";

export const getUserInfo = async (): Promise<RootInfoType> => {
  try {
    const response = await instance.get(`/`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
