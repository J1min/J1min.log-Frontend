import instance from "../../lib/instance";
import { UserPromiseType } from "../../interface/user";

export const getUserInfo = async (): Promise<UserPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};
