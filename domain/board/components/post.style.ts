import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Image from "next/image";

export const PostImageContainer = styled.div`
  width: 70%;
`;

export const PostImageProvider = styled.div`
  span {
    position: unset !important;
  }
`;

export const PostImageElement = styled(Image)`
  object-fit: scale-down;
  width: unset !important;
  position: relative !important;
  height: 30% !important;
`;

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentTitle = styled.h2`
  margin: 0;
  a {
    color: ${theme.main};
  }
  a:visited {
    color: ${theme.lightMain};
  }
  width: 100%;
  min-width: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContentTime = styled.span``;

export const ContentDescription = styled.span``;
