import React from "react";
import type { NextPage } from "next";
import Editor from "../components/editor";
import { EditorContent } from "../interface/write";
import { EditorFormValue } from "../interface/board";
import { getTodaysDate } from "../function";
import useStore from "../context/useStore";
import { useForm } from "react-hook-form";
import {
  CompleteButton,
  PostImage,
  PostImageContainer,
  PostImageElement,
  TitleInput,
} from "../components/editor/index.style";
import { postBoard } from "../api/board";
import { postEditorImage } from "../api/editor";

const WritePage: NextPage = () => {
  const [imageSrc, setImageSrc] = React.useState<string>("");
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
          postBoard({
            board_title: data.title,
            content: content,
            user_id: 1,
            created_at: getTodaysDate(),
            thumbnail: "string",
          });
        })}
      >
        <TitleInput type={`text`} {...register("title")} />
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files !== null) {
              postEditorImage(event.target!.files[0])
                .then((response) => {
                  setImageSrc(
                    `${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}/${response.href}`
                  );
                })
                .catch((_) => {
                  alert("이미지 업로드에 실패했습니다.");
                });
            }
          }}
        />
        <PostImageContainer>
          <PostImage>
            {imageSrc && (
              <PostImageElement src={imageSrc} alt={``} layout={`fill`} />
            )}
          </PostImage>
        </PostImageContainer>
        <Editor content={content} setContent={setContent} />
        <CompleteButton type="submit" disabled={isSubmitting}>
          작성 완료
        </CompleteButton>
      </form>
    </section>
  );
};

export default WritePage;
