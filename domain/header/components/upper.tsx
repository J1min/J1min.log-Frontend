import React from "react";
import type { NextPage } from "next";
import { Container, Author, Script } from "./upper.style";
import { getRandomScript } from "../api";
import { ScriptDataType } from "../../../interface/script";
import Loading from "../../../components/loading";

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
      <Container>
        {script ? (
          <div>
            <Script>{script?.script_content}</Script>
            <Author>-{script?.author}-</Author>
          </div>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Upper;
