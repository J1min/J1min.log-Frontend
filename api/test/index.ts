import instance from "../../lib/instance";
import { UserInfoType } from "../../interface/user";
import { GET_USER_INFO } from "../../constants";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const response = await instance.get(GET_USER_INFO);
    return response.data;
  } catch (err) {
    throw err;
  }
};
