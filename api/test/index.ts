import instance from "../../lib/instance";
import { UserInfoType } from "../../interface/user";
import * as API from "../../constants";

export const getUserInfo = async (): Promise<UserInfoType> => {
  try {
    const response = await instance.get(API.GET_USER_INFO);
    return response.data;
  } catch (err) {
    throw err;
  }
};
