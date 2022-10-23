import React from "react";
import type { NextPage } from "next";
import { getRandomScript } from "../../api/script";
import { ScriptType } from "../../interface/script";
import { Container, Author, Script } from "./upper.style";
import Loading from "../loading";

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

  const [script, setScript] = React.useState<ScriptType>();

  return script ? (
    <Container>
      <div>
        <Script>{script?.script_content}</Script>
        <Author>-{script?.author}-</Author>
      </div>
    </Container>
  ) : (
    <Container>
      <Loading />
    </Container>
  );
};

export default Upper;
