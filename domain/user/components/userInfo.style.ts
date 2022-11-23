import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 20rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;

export const UserInfoWrapper = styled.div`
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
  color: ${theme.lightMain};
`;
