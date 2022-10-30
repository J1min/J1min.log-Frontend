import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WriterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const WriterName = styled.span`
  color: ${theme.main};
  padding: 0 1rem;
`;
