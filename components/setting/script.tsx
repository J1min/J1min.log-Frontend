import React from "react";
import type { NextPage } from "next";
import * as S from "./index.style";
import { postAllScriptDataButton } from "../../function/setting";

const Script: NextPage = () => {
  return (
    <main>
      <S.SettingButton onClick={postAllScriptDataButton}>
        명언 데이터 전체 추가
      </S.SettingButton>
    </main>
  );
};

export default Script;
