const fs = require("fs");
const prompt = require("prompt-sync")();

const folderName = prompt("folder no namaewa? ");

fs.mkdir(`domain/${folderName}`, (error) => {
  if (error) throw error;

  fs.mkdir(`domain/${folderName}/components`, (error) => {
    if (error) throw error;
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
    fs.writeFileSync(`domain/${folderName}/container/index.tsx`, ``);
    fs.writeFileSync(`domain/${folderName}/container/index.style.ts`, ``);
  });

  console.log("칸페키-");
});
