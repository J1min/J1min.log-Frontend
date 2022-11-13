import { UserLeadsRequestType, UserLeadsResponseType } from "../interface";

const { NEXT_PUBLIC_ADMIN_PASSWORD } = process.env;

const check = () => {
  return prompt("비밀번호를 입력해주세요") === NEXT_PUBLIC_ADMIN_PASSWORD;
};

export const postAllScriptDataButton = () => {
  if (check()) {
    alert("확인되었습니다.");
    postAllScriptData();
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
};

export const postLeads = (userData: UserLeadsRequestType) => {
  if (check()) {
    alert("확인되었습니다.");
    postLeadsData(userData);
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
};

import scriptData from "../../../archive/upperData.json";
import instance from "../../../lib/instance";

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
  try {
    const { data } = await instance.post(`/user/leads`, userData);
    alert(`추가!!!!!!!!!!!!!!!!!!!`);
    return data;
  } catch (error) {
    alert("실패했어요");
    throw error;
  }
};
