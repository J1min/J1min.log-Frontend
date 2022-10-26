import scriptData from "../../archive/upperData.json";
import {
  UserLeadsResponseType,
  UserLeadsRequestType,
} from "../../interface/setting";
import instance from "../../lib/instance";

export const postAllScriptData = async () => {
  try {
    for (let i = 0; i < scriptData.length; i++) {
      await instance.post(`/script`, scriptData[i]);
    }
    alert("완료했습니다.");
  } catch {
    alert("다 올리는 도중에 실패했어요");
  }
};

export const postLeadsData = async (
  userData: UserLeadsRequestType
): Promise<UserLeadsResponseType> => {
  console.log(userData)
  try {
    const { data } = await instance.post(`/user/leads`, userData);
    alert(`추가!!!!!!!!!!!!!!!!!!!`);
    return data;
  } catch (error) {
    alert("실패했어요");
    throw error;
  }
};
