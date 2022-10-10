import styled from "styled-components";
import theme from "../theme";

export const TitleInput = styled.input`
  display: block;
  width: 60%;
  height: 10px;
  color: ${theme.color.main};
  background-color: ${theme.color.theme};
  margin: 10px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${theme.color.main};
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
  margin-top: 110px;
  background-color: ${theme.color.main};
  transition: 0.3s;
  width: 250px;
  height: 54px;
  display: block;
  color: ${theme.color.white};
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${theme.color.secondary};
  }
`;
