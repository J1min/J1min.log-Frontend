module.exports = {
  toCamel: (fileName) => {
    if (fileName) {
      return fileName[0].toUpperCase() + fileName.substr(1);
    }
    return;
  },
  componentsTemplate: (camelFolderName) => {
    const template = `import React from "react";
import type { NextPage } from "next";
        
const ${camelFolderName}: NextPage = () => {
  return <>${camelFolderName}</>
};
export default ${camelFolderName};
        `;
    return template;
  },
  containerTemplates: (camelFolderName) => {
    const template = `import React from "react";
import type { NextPage } from "next";
    
const ${camelFolderName}Container: NextPage = () => {
  return <>${camelFolderName}</>
};
export default ${camelFolderName}Container;
    `;
    return template;
  },
};
