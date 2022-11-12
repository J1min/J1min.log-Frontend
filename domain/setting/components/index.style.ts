import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserInput = styled.input`
  border: 2px solid ${theme.main};
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
  max-width: 16rem;
  font-size: 24px;
  color: ${theme.background};
  background-color: ${theme.main};
  border-radius: 0.3rem;
  padding: 2rem;
`;

export const DangerZone = styled.div`
  position: relative;
  border: 2px solid ${theme.red["900"]};
  max-width: 20rem;
  padding: 2rem;
  margin: 2rem auto;
  box-sizing: border-box;
`;

export const DangerZoneTitle = styled.span`
  position: absolute;
  top: -15px;
  left: 40px;
  border: 2px solid ${theme.background};
  color: ${theme.red["900"]};
  background-color: ${theme.background};
`;

export const Line = styled.hr`
  border: 2px solid ${theme.main};
  max-width: 20rem;
  margin: 2rem auto;
`;
