import scriptData from "../../archive/upperData.json";
import { POST_SCRIPT } from "../../constants";
import instance from "../../lib/instance";

export const postAllScriptData = async () => {
  try {
    for (let i = 0; i < scriptData.length; i++) {
      await instance.post(POST_SCRIPT, scriptData[i]);
    }
  } catch {
    alert("다 올리는 도중에 실패했어요");
  }
};
