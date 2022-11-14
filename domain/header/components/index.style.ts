import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Title = styled.h1`
  color: ${theme.main};
  font-size: 1.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderProvider = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${theme.main} solid 1px;
  border-bottom: ${theme.main} solid 1px;
  margin-bottom: 1rem;
`;

export const LogoProvider = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  margin-left: 2rem;
  cursor: pointer;
`;

export const MenuProvider = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
`;

export const Menu = styled.li`
  list-style: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
