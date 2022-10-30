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
import NoImage from "../../public/assets/image/board/no_image.svg";
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
              <Image src={data.thumbnail} alt={``} width={200} height={120} />
            ) : (
              <Image src={NoImage} alt={``} width={200} height={120} />
            )}

            <ContentContainer>
              <ContentTitle><Link href={`board/${data.board_id}`}>{data.board_title}</Link></ContentTitle>
              <ContentTime>{data.created_at.split(" ")[0]}</ContentTime>
              <ContentDescription>{data.description}</ContentDescription>
            </ContentContainer>
          </PostContainer>
        );
      })}
    </main>
  );
};
export default Post;
