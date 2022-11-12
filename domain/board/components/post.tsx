import React from "react";
import type { NextPage } from "next";
import {
  PostImageContainer,
  PostImageProvider,
  PostImageElement,
  PostContainer,
  ContentContainer,
  ContentTitle,
  ContentTime,
  ContentDescription,
} from "./post.style";
import Link from "next/link";
import { BoardDataType } from "../interface";
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
          <PostContainer key={idx}>
            {data.thumbnail ? (
              <PostImageContainer>
                <PostImageProvider>
                  <PostImageElement
                    src={data.thumbnail}
                    alt={data.description}
                    layout={`fill`}
                  />
                </PostImageProvider>
              </PostImageContainer>
            ) : (
              <PostImageContainer>
                <PostImageProvider>
                  <PostImageElement
                    src={NoImage}
                    alt={data.description}
                    layout={`fill`}
                  />
                </PostImageProvider>
              </PostImageContainer>
            )}

            <ContentContainer>
              <ContentTitle>
                <Link href={`board/${data.board_id}`}>{data.board_title}</Link>
              </ContentTitle>
              <ContentDescription>{data.description}</ContentDescription>
              <ContentTime>{data.created_at.split(" ")[0]}</ContentTime>
            </ContentContainer>
          </PostContainer>
        );
      })}
    </main>
  );
};
export default Post;
