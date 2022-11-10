const fs = require("fs");
const prompt = require("prompt-sync")();

const folderName = prompt("Folder name? ");

fs.mkdir(`domain/${folderName}`, (error) => {
  if (error) throw error;
  fs.mkdir(`domain/${folderName}/components`, (error) => {
    if (error) throw error;
  });
  fs.mkdir(`domain/${folderName}/interface`, (error) => {
    if (error) throw error;
  });
  fs.mkdir(`domain/${folderName}/api`, (error) => {
    if (error) throw error;
  });
  fs.mkdir(`domain/${folderName}/assets`, (error) => {
    if (error) throw error;
  });
  console.log("만들엇서요");
});
