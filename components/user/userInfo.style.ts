import styled from "styled-components";
import { theme } from "../../styles/theme";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
`;

export const UserNickname = styled.h1`
  margin: 0;
`;
export const UserDescription = styled.span`
  font-size: 20px;
  margin-top: 14px;
  color: ${theme.secondary};
`;
