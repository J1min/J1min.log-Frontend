const fs = require("fs");
const prompt = require("prompt-sync")();

const folderName = prompt("folder no namaewa? ");
const filename = prompt("file no namaewa? ");

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.tsx`,
  `import React from "react";
import type { NextPage } from "next";

const ${filename}: NextPage = () => {
  return (
    <section id={'${filename}'}>${filename}</section>
  )
};
export default ${filename};
`
);

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.style.ts`,
  `import styled from "styled-components";\n`
);

console.log("칸페키-");
