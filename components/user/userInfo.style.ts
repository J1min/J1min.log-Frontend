import styled from "styled-components";
import { theme } from "../../styles/theme";

export const UserContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserNickname = styled.h1`
  margin: 0;
`;
export const UserDescription = styled.span`
  font-size: 20px;
  margin-top: 14px;
  color: ${theme.secondary};
`;
