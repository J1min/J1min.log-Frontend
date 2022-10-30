import React from "react";
import type { NextPage } from "next";
import { getAllBoard } from "../../api/board";
import { BoardDataType, PostBoardResponseType } from "../../interface/board";
import {
  PostContainer,
  ContentContainer,
  ContentTitle,
  ContentTime,
} from "./post.style";
import Image from "next/image";

const Post: NextPage = () => {
  const [postData, setPostData] = React.useState<BoardDataType[]>();

  React.useEffect(() => {
    getAllBoard().then((response) => {
      setPostData(response);
    });
  }, []);

  return (
    <main>
      {postData?.map((data, idx) => {
        return (
          <PostContainer key={idx}>
            <Image src={data.thumbnail} alt={``} width={200} height={120} />
            <ContentContainer>
              <ContentTitle>{data.board_title}</ContentTitle>
              <ContentTime>{data.created_at.split(" ")[0]}</ContentTime>
            </ContentContainer>
          </PostContainer>
        );
      })}
    </main>
  );
};
export default Post;
