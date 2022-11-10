import React from "react";
import type { NextPage } from "next";
import { getAllBoard } from "../../api/board";
import { BoardDataType, PostBoardResponseType } from "../../interface/board";
import {
  PostContainer,
  ContentContainer,
  ContentTitle,
  ContentTime,
  ContentDescription,
} from "./post.style";
import Image from "next/image";
import NoImage from "../../assets/board/no_image.svg";
import Link from "next/link";

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
              <Image
                src={data.thumbnail}
                alt={data.description}
                width={200}
                height={120}
              />
            ) : (
              <Image
                src={NoImage}
                alt={data.description}
                width={200}
                height={120}
              />
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
