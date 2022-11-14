import React from "react";
import type { NextPage } from "next";
import {
  PostImageProvider,
  PostImageElement,
  PostProvider,
  ContentProvider,
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
          <PostProvider key={idx}>
            {data.thumbnail ? (
              <PostImageProvider>
                <PostImageProvider>
                  <PostImageElement
                    src={data.thumbnail}
                    alt={data.description}
                    layout={`fill`}
                  />
                </PostImageProvider>
              </PostImageProvider>
            ) : (
              <PostImageProvider>
                <PostImageProvider>
                  <PostImageElement
                    src={NoImage}
                    alt={data.description}
                    layout={`fill`}
                  />
                </PostImageProvider>
              </PostImageProvider>
            )}

            <ContentProvider>
              <ContentTitle>
                <Link href={`board/${data.board_id}`}>{data.board_title}</Link>
              </ContentTitle>
              <ContentDescription>{data.description}</ContentDescription>
              <ContentTime>{data.created_at.split(" ")[0]}</ContentTime>
            </ContentProvider>
          </PostProvider>
        );
      })}
    </main>
  );
};
export default Post;
