import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Title = styled.h1`
  color: ${theme.main};
  font-size: 1.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${theme.main} solid 1px;
  border-bottom: ${theme.main} solid 1px;
  margin-bottom: 3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 13rem;
  margin-left: 2rem;
  @media (max-width: 524px) {
    img {
      display: none !important;
    }
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  margin-right: 1rem;
`;

export const Menu = styled.li`
  list-style: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
