exports.toCamel = (fileName) => {
  if (fileName) {
    return fileName[0].toUpperCase() + fileName.substr(1);
  }
  return;
};
