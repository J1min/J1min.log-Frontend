import React from "react";
import Editor from "../components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  BoardDataType,
  EditorFormValue,
} from "../../board/interface/index.type";
import { postBoard } from "../../board/api";
import { postThumbnail } from "../api";
import {
  CompleteButton,
  PostImageWrapper,
  PostImage,
  PostImageElement,
  ThumbnailLabel,
  TitleInput,
  ThumbnailLabelWrapper,
} from "../components/index.style";
import type { NextPage } from "next";
import { getTodaysDate } from "../util";
import useStore from "../context";

const WritePage: NextPage = () => {
  const router = useRouter();
  const [thumbnail, setThumbnail] = React.useState<string>("");
  const [thumbnailStatus, setThumbnailStatus] = React.useState("썸네일 업로드");
  const { content, setContent } = useStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditorFormValue>();

  return (
    <section id="editor">
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
          postBoard(boardData).then((response) => {
            console.log(response);
          });
        })}
      >
        <input
          id="thumbnail"
          type="file"
          style={{ display: "none" }}
          onChange={(event) => {
            postThumbnail(event, setThumbnail, setThumbnailStatus);
            setThumbnailStatus("썸네일 업로드 중..");
          }}
        />
        <TitleInput
          type={`text`}
          {...register("title")}
          placeholder="제목을 입력해주세요."
        />
        <TitleInput
          type={`text`}
          {...register("description")}
          placeholder="설명글을 입력해주세요."
        />
        {thumbnail && (
          <PostImageWrapper>
            <PostImage>
              <PostImageElement
                src={thumbnail}
                alt="썸네일 입니다"
                layout="fill"
              />
            </PostImage>
          </PostImageWrapper>
        )}
        <Editor content={content} setContent={setContent} />
        <ThumbnailLabelWrapper>
          <ThumbnailLabel htmlFor="thumbnail">{thumbnailStatus}</ThumbnailLabel>
        </ThumbnailLabelWrapper>
        <CompleteButton
          type="submit"
          disabled={isSubmitting}
          onClick={() => {
            router.push("/board");
          }}
        >
          작성 완료
        </CompleteButton>
      </form>
    </section>
  );
};

export default WritePage;
