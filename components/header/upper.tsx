import React from "react";
import type { NextPage } from "next";
import { getRandomScript } from "../../api/script";
import { ScriptType } from "../../interface/script";
import * as S from "./upper.style";

const Upper: NextPage = () => {
  React.useEffect(() => {
    getRandomScript().then((response) => {
      setScript(response.scriptData);
    });
  }, []);

  const [script, setScript] = React.useState<ScriptType>();

  return (
    <S.Container>
      <div>
        <S.Script>{script?.script_content}</S.Script>
        <S.Author>-{script?.author}-</S.Author>
      </div>
    </S.Container>
  );
};

export default Upper;
