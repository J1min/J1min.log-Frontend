import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const NotFoundButton = styled.button`
  display: block;
  margin: 2rem auto;
  width: 16rem;
  height: 3rem;
  font-size: 24px;
  color: ${theme.background};
  background-color: ${theme.main};
  border-radius: 0.3rem;
`;

export const NotFoundProvider = styled.div`
  text-align: center;
`;
