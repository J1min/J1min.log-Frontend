import instance from "../../lib/axios";
import { UserInfoType } from "../../domain/user/interface";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (err) {
    throw err;
  }
};
