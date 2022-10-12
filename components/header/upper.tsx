import React from "react";
import type { NextPage } from "next";
import { getRandomScript } from "../../api/script/getRandomScript";
import { ScriptType } from "../../interface/script/randomScript";

const Upper: NextPage = () => {
  React.useEffect(() => {
    getRandomScript().then((response) => {
      console.log(response);
      setScript(response.scriptData);
    });
  }, []);

  const [script, setScript] = React.useState<ScriptType>();

  return (
    <main>
      <h1>{script?.script_content}</h1>
      <h1>-{script?.author}-</h1>
    </main>
  );
};

export default Upper;
