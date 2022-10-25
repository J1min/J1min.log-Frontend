import React from "react";
import type { NextPage } from "next";
import { CompleteButton, TitleInput } from "../components/editor/index.style";
import Editor from "../components/editor";
import { EditorContent } from "../interface/write";
import useStore from "../context/useStore";
import { writeSubmit } from "../function/board";
import { PostBoardRequestType } from "../interface/board";
import { getTodaysDate } from "../function";

const WritePage: NextPage = () => {
  const { content, setContent }: EditorContent = useStore();
  const [title, setTitle] = React.useState<string>("");
  const data: PostBoardRequestType = {
    content: content,
    user_id: 1,
    created_at: getTodaysDate(),
    board_title: title,
  };

  const setTitleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = (data: PostBoardRequestType) => {
    writeSubmit(data);
  };

  return (
    <>
      <main>
        <TitleInput onChange={setTitleEvent} />
        <Editor content={content} setContent={setContent} />
        <CompleteButton
          onClick={() => {
            onSubmit(data);
          }}
        >
          작성 완료
        </CompleteButton>
      </main>
    </>
  );
};

export default WritePage;
