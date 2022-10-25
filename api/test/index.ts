import instance from "../../lib/instance";
import { UserInfoType } from "../../interface/user";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const response = await instance.get(`/user/1`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
