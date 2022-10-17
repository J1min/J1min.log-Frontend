import instance from "../../lib/instance";
import { UserPromiseType } from "../../interface/user";

export const getUserInfo = async (): Promise<UserPromiseType> => {
  try {
    const response = await instance.get(`/user/1`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
