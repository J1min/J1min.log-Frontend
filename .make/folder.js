const fs = require("fs");
const prompt = require("prompt-sync")();
const { toCamel, containerTemplates } = require("./util");

const folderName = prompt("folder no namaewa? ");
const camelFolderName = toCamel(folderName);

fs.mkdir(`domain/${folderName}`, (error) => {
  if (error) throw error;

  // components
  fs.mkdir(`domain/${folderName}/components`, (error) => {
    if (error) throw error;
  });

  // container
  fs.mkdir(`domain/${folderName}/container`, (error) => {
    if (error) throw error;
    fs.writeFileSync(
      `domain/${folderName}/container/index.tsx`,
      containerTemplates(camelFolderName)
    );

    fs.writeFileSync(
      `domain/${folderName}/container/index.style.ts`,
      `import styled from "styled-components";\n`
    );
  });

  // interface
  fs.mkdir(`domain/${folderName}/interface`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/interface/index.ts`, `export {}`);
  });

  // api
  fs.mkdir(`domain/${folderName}/api`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/api/index.ts`, `export {}`);
  });

  // assets
  fs.mkdir(`domain/${folderName}/assets`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/assets/index.ts`, `export {}`);
  });

  // hooks
  fs.mkdir(`domain/${folderName}/hooks`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/hooks/index.ts`, `export {}`);
  });

  // server
  fs.mkdir(`domain/${folderName}/server`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/server/index.ts`, `export {}`);
  });

  // context
  fs.mkdir(`domain/${folderName}/context`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/context/index.ts`, `export {}`);
  });

  // model
  fs.mkdir(`domain/${folderName}/model`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/model/index.ts`, `export {}`);
  });

  // util
  fs.mkdir(`domain/${folderName}/util`, (error) => {
    if (error) throw error;
    fs.writeFileSync(`domain/${folderName}/util/index.ts`, `export {}`);
  });

  console.log("칸페키-");
  console.log(`domain/${folderName}/components`);
});
