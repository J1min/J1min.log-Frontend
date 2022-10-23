import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NotFoundButton = styled.button`
  display: block;
  margin: 2rem auto;
  width: 16rem;
  height: 3rem;
  font-size: 24px;
  color: ${theme.theme};
  background-color: ${theme.main};
  border-radius: 0.3rem;
`;

export const NotFoundContainer = styled.div`
  text-align: center;
`;