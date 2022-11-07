import styled from "styled-components";
import { theme } from "../../styles/theme";
export const UserInput = styled.input`
  border: 2px solid ${theme.main};
  width: 20rem;
  border-radius: 8px;
  padding: 10px;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid ${theme.main};
  }
`;

export const SettingButton = styled.button`
  display: block;
  margin: 2rem auto;
  width: 16rem;
  height: 3rem;
  font-size: 24px;
  color: ${theme.background};
  background-color: ${theme.main};
  border-radius: 0.3rem;
`;

export const DangerZone = styled.div`
  border: 2px solid ${theme.red["900"]};
  width: 20rem;
  margin: 2rem auto;
`;

export const Line = styled.hr`
  border: 2px solid ${theme.main};
  width: 20rem;
  margin: 2rem auto;
`;
