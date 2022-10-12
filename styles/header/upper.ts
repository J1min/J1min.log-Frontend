import styled from "styled-components";
import theme from "../theme";

export const Container = styled.header`
  width: 100%;
  background-color: ${theme.color.light_theme};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const Script = styled.h2`
  color: ${theme.color.white};
  margin: 0;
`;

export const Author = styled.h4`
  color: ${theme.color.white};
  margin: 0;
`;
