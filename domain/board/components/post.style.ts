import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentTitle = styled.h2`
  margin: 0;
  a {
    color: ${theme.main};
  }
  a:visited {
    color: ${theme.lightMain};
  }
`;

export const ContentTime = styled.span``;

export const ContentDescription = styled.span``;
