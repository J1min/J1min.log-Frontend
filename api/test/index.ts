import instance from "../../lib/instance";
import { UserInfoType } from "../../interface/user/user";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const response = await instance.get(`/`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
