const fs = require("fs");
const prompt = require("prompt-sync")();
const { toCamel } = require("./util");

const folderName = prompt("folder no namaewa? ");
const filename = prompt("file no namaewa? ");
const camelFilename = toCamel(filename);

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.tsx`,
  `import React from "react";
import type { NextPage } from "next";

const ${camelFilename}: NextPage = () => {
  return (
    <section id={'${filename}'}>${filename}</section>
  )
};
export default ${camelFilename};
`
);

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.style.ts`,
  `import styled from "styled-components";\n`
);

console.log("칸페키-");
