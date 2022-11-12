import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ThumbnailLabel = styled.label`
  display: block;
  text-align: center;
  width: 5rem;
  padding: 1rem;
  margin: 1rem auto;
  background-color: ${theme.main};
  color: ${theme.black};
  font-size: 0.8rem;
  border-radius: 0.5rem;
`;

export const TitleInput = styled.input`
  display: block;
  width: 70%;
  height: 10px;
  color: ${theme.main};
  background-color: ${theme.background};
  margin: 10px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${theme.main};
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const CompleteButton = styled.button`
  margin: 3rem auto;
  background-color: ${theme.main};
  transition: 0.3s;
  width: 14rem;
  height: 3rem;
  display: block;
  color: ${theme.background};
  border: 0;
  border-radius: 0.3rem;
  box-sizing: border-box;
  &:hover {
    background-color: ${theme.lightMain};
  }
`;

export const PostImageContainer = styled.div`
  width: 70%;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid ${theme.main};
  border-radius: 0.5rem;
  box-sizing: border-box;
`;

export const PostImage = styled.div`
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
