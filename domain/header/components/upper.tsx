import React from "react";
import type { NextPage } from "next";
import { Provider, Author, Script } from "./upper.style";
import { getRandomScript } from "../api";
import Loading from "../../loading/components";
import { ScriptDataType } from "../interface";

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
      <Provider>
        {script ? (
          <div>
            <Script>{script?.script_content}</Script>
            <Author>-{script?.author}-</Author>
          </div>
        ) : (
          <Loading />
        )}
      </Provider>
    </>
  );
};

export default Upper;
