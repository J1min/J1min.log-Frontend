const fs = require("fs");
const prompt = require("prompt-sync")();
const { toCamel, componentsTemplate } = require("./util");

const folderName = prompt("folder no namaewa? ");
const filename = prompt("file no namaewa? ");
const camelFilename = toCamel(filename);

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.tsx`,
  componentsTemplate(camelFilename)
);

fs.writeFileSync(
  `domain/${folderName}/components/${filename}.style.ts`,
  `import styled from "styled-components";\n`
);

console.log("칸페키-");
