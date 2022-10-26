import { postLeadsData, postAllScriptData } from "../../api/setting";
import { UserLeadsRequestType } from "../../interface/setting";

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
