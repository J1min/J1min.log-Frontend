import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TitleInput = styled.input`
  display: block;
  width: 70%;
  height: 10px;
  color: ${theme.main};
  background-color: ${theme.theme};
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
  margin: 40px auto;
  background-color: ${theme.main};
  transition: 0.3s;
  width: 14rem;
  height: 3rem;
  display: block;
  color: ${theme.theme};
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${theme.secondary};
  }
`;

export const PostImageContainer = styled.div`
  width: 70%;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid ${theme.main};
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
