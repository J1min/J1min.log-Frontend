import scriptData from "../../archive/upperData.json";
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

export const postBoard = async () => {
  const postData = {
    user_id: 1,
    content: "엄준식",
    created_at: "2022-10-10",
    board_title: "엄준식",
  };
  try {
    await instance.post(`/write`, postData);
    console.log("굿");
  } catch {
    alert("게시글 올리는 도중에 실패했어요");
  }
};
