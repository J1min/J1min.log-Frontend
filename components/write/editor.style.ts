import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TitleInput = styled.input`
  display: block;
  width: 60%;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: ${theme.main};
  transition: 0.3s;
  width: 250px;
  height: 54px;
  display: block;
  color: ${theme.white};
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${theme.secondary};
  }
`;
