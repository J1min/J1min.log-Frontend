import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const UserStyle = createGlobalStyle` 
body {
  background-color: ${theme.background};
}
`;
