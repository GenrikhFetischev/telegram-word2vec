const fs = require("fs-extra");
const path = require("path");


const { prepareText, createFileName } = require("./utils");
const { train, analogy, similarity } = require("./actions");

const PREPARED_BASE_PATH = path.resolve(__dirname, "./models/prepared");
const VECTORS_BASE_PATH = path.resolve(__dirname, "./models/vectors");

const writePreparedFile = async string => {
  const preparedText = prepareText(string);
  const fileName = createFileName();
  await fs.writeFile(path.join(PREPARED_BASE_PATH, fileName), preparedText);
  return fileName;
};

const test = async () => {
  const gp = await fs.readFile(path.resolve(__dirname, "gp.txt"), "utf-8");
  const fileName = await writePreparedFile(gp);

  await train(
    path.resolve(PREPARED_BASE_PATH, fileName),
    path.resolve(VECTORS_BASE_PATH, fileName)
  );
};


const trainAnalogy = async () => {
  await analogy('висли', ['гарри','волшебник'])
}

trainAnalogy()
