const fs = require("fs");
const prompt = require("prompt-sync")();
const { toCamel } = require("./util");

const folderName = prompt("folder no namaewa? ");
const camelFolderName = toCamel(folderName);

fs.mkdir(`domain/${folderName}`, (error) => {
  if (error) throw error;

  fs.mkdir(`domain/${folderName}/components`, (error) => {
    if (error) throw error;
    fs.writeFileSync(
      `domain/${folderName}/components/index.tsx`,
      `import React from "react";
import type { NextPage } from "next";

const ${camelFolderName}: NextPage = () => {
  return (
    <>${camelFolderName}</>
  )
};
export default ${camelFolderName};
`
    );

    fs.writeFileSync(
      `domain/${folderName}/components/index.style.ts`,
      `import styled from "styled-components";\n`
    );
  });

  fs.mkdir(`domain/${folderName}/interface`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/interface/index.ts`, ``);
  });

  fs.mkdir(`domain/${folderName}/api`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/api/index.ts`, ``);
  });

  fs.mkdir(`domain/${folderName}/assets`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/assets/index.ts`, ``);
  });

  fs.mkdir(`domain/${folderName}/container`, (error) => {
    if (error) throw error;
    fs.writeFileSync(
      `domain/${folderName}/container/index.tsx`,
      `import React from "react";
import type { NextPage } from "next";

const ${camelFolderName}Container: NextPage = () => {
  return (
    <>${camelFolderName}</>
  )
};
export default ${camelFolderName}Container;
`
    );

    fs.writeFileSync(
      `domain/${folderName}/container/index.style.ts`,
      `import styled from "styled-components";\n`
    );
  });

  console.log("칸페키-");
  console.log(`domain/${folderName}/components`);
});
