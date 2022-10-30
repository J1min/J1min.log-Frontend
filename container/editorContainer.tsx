import React from "react";
import type { NextPage } from "next";
import Editor from "../components/editor";
import { EditorContent } from "../interface/write";
import { BoardDataType, EditorFormValue } from "../interface/board";
import { getTodaysDate } from "../function";
import useStore from "../context/useStore";
import { useForm } from "react-hook-form";
import {
  CompleteButton,
  PostImage,
  PostImageContainer,
  PostImageElement,
  TitleInput,
  ThumbnailLabel,
} from "../components/editor/index.style";
import { postBoard } from "../api/board";
import { postThumbnail } from "../api/editor";

const WritePage: NextPage = () => {
  const [thumbnail, setThumbnail] = React.useState<string>("");
  const { content, setContent }: EditorContent = useStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditorFormValue>();

  return (
    <section id={`editor`}>
      <form
        onSubmit={handleSubmit((data) => {
          const boardData: BoardDataType = {
            board_title: data.title,
            content: content,
            user_id: 1,
            created_at: getTodaysDate(),
            description: data.description,
            thumbnail: thumbnail,
          };
          postBoard(boardData);
        })}
      >
        <ThumbnailLabel htmlFor="thumbnail">썸네일 업로드</ThumbnailLabel>
        <input
          id="thumbnail"
          type="file"
          style={{ display: "none" }}
          onChange={(event) => {
            postThumbnail(event, setThumbnail);
          }}
        />
        <TitleInput
          type={`text`}
          {...register("title")}
          placeholder={`제목을 입력해주세요.`}
        />
        <TitleInput
          type={`text`}
          {...register("description")}
          placeholder={`설명글을 입력해주세요.`}
        />
        {thumbnail && (
          <PostImageContainer>
            <PostImage>
              <PostImageElement
                src={thumbnail}
                alt={`썸네일 입니다`}
                layout={`fill`}
              />
            </PostImage>
          </PostImageContainer>
        )}
        <Editor content={content} setContent={setContent} />
        <CompleteButton type="submit" disabled={isSubmitting}>
          작성 완료
        </CompleteButton>
      </form>
    </section>
  );
};

export default WritePage;
