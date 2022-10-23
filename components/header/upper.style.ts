import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  background-color: ${theme.lightTheme};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const Script = styled.h2`
  color: ${theme.white};
  margin: 0;
`;

export const Author = styled.h4`
  color: ${theme.white};
  margin: 0;
`;
