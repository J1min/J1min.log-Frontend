import styled from "styled-components";
import theme from "../theme";

export const Container = styled.header`
  width: 100%;
  background-color: ${theme.color.light_theme};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Script = styled.h2`
  color: ${theme.color.white};
`;

export const Author = styled.h4`
  color: ${theme.color.white};
`;
