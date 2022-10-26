import instance from "../../lib/instance";
import { UserInfoType } from "../../interface/user";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (err) {
    throw err;
  }
};
