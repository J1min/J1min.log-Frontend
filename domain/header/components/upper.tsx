import React from "react";
import type { NextPage } from "next";
import { Wrapper, Author, Script } from "./upper.style";
import { getRandomScript } from "../api";
import Loading from "../../loading/components";
import { ScriptDataType } from "../interface/index.type";

const Upper: NextPage = () => {
  React.useEffect(() => {
    getRandomScript()
      .then((response) => {
        setScript(response.scriptData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [script, setScript] = React.useState<ScriptDataType>();

  return (
    <>
      <Wrapper>
        {script ? (
          <div>
            <Script>{script?.script_content}</Script>
            <Author>-{script?.author}-</Author>
          </div>
        ) : (
          <Loading />
        )}
      </Wrapper>
    </>
  );
};

export default Upper;
