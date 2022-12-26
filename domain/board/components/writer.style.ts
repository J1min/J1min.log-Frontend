import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const WriterName = styled.span`
  color: ${theme.main};
  padding: 0 1rem;
`;
