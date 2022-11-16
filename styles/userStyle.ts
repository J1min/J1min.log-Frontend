import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const UserStyle = createGlobalStyle` 
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

html {
  font-family: 'Pretendard-Regular';
}

img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.ql-snow ,blockquote {
  border-left: 5px solid ${theme.main} !important;
  padding: 10px !important;
}

.ql-blank {
  font-family: 'IBMPlexSansKR-Regular';
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.background};
  color: ${theme.main};
  border: 0 !important;
  border-radius: 6px !important;
}

.ql-toolbar {
  border-radius: 6px !important;
  border: 1px solid  ${theme.main} !important;
  font-family: 'IBMPlexSansKR-Regular';
  border-bottom: 0 !important;
}

.ql-container {
  border-radius: 6px !important;
  border: 1px solid  ${theme.main} !important;
}

.ql-picker-label::before {
  color: ${theme.main};
}

.ql-snow, .ql-stroke {
  stroke: ${theme.main} !important;
}

.ql-picker,pre.ql-syntax {
  font-family: 'IBMPlexSansKR-Regular';
}

.ql-editor {
  font-size: 16px;
  font-family: 'IBMPlexSansKR-Regular';
  height: 450px;
}

.ql-editor::-webkit-scrollbar {
  width: 8px;
}

.ql-editor::-webkit-scrollbar-thumb {
  height: 10%;
  background: ${theme.main};
  border-radius: 10px;
}

body {
  margin: 0;
  color: ${theme.main} !important;
  background-color: ${theme.background} !important;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  height: 10%;
  background-color: ${theme.main};
}
::-webkit-scrollbar-track {
}
`;
