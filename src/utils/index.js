const prepareText = string =>
  string
    .toLowerCase()
    .replace(/[^A-Za-zА-Яа-яЁёЇїІіҐґЄє0-9\-]|\s]/g, " ")
    .replace(/\s{2,}/g, " ");

const createFileName = (filename = "file") =>
  `${filename}-${Number(new Date())}.txt`;

module.exports = {
  prepareText,
  createFileName
};
