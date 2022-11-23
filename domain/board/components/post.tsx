import React from "react";
import type { NextPage } from "next";
import {
  PostImageElement,
  PostWrapper,
  ContentWrapper,
  ContentTitle,
  ContentTime,
  ContentDescription,
} from "./post.style";
import Link from "next/link";
import { BoardDataType } from "../interface/index.type";
import { getAllBoard } from "../api";
import { NoImage } from "../assets";

const Post: NextPage = () => {
  const [postData, setPostData] = React.useState<BoardDataType[]>();

  React.useEffect(() => {
    getAllBoard().then((response) => {
      setPostData(response);
      console.log(response);
    });
  }, []);

  return (
    <main>
      {postData?.map((data, idx) => {
        return (
          <PostWrapper key={idx}>
            <PostImageElement
              src={data.thumbnail ? data.thumbnail : NoImage}
              alt={data.description}
              width={200}
              height={120}
            />

            <ContentWrapper>
              <ContentTitle>
                <Link href={`board/${data.board_id}`}>{data.board_title}</Link>
              </ContentTitle>
              <ContentDescription>{data.description}</ContentDescription>
              <ContentTime>{data.created_at.split(" ")[0]}</ContentTime>
            </ContentWrapper>
          </PostWrapper>
        );
      })}
    </main>
  );
};
export default Post;
