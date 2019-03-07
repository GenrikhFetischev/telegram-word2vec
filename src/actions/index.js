const w2v = require("word2vec");

const train = (preparedText, resultPath, vectorSize = 100) =>
  new Promise(resolve => {
    console.log(resultPath);
    w2v.word2vec(
      preparedText,
      resultPath,
      {
        size: vectorSize
      },
      () => {
        console.log("DONE");
        resolve(true);
      }
    );
  });

const analogy = (word, pair, number_neighbors = 50) => {
  return new Promise((resolve, reject) => {
    w2v.loadModel("src/models/vectors/file-1551901296659.txt", (error, model) => {
      if (error) reject();
      console.log("SIZE: ", model.size);
      console.log("WORDS: ", model.words);

      try {
        console.time("analogy");
        console.log(model.analogy(word, pair, number_neighbors));
        console.timeEnd("analogy");
      } catch (error) {
        reject(error);
      }

      resolve();
    });
  });
};

const  similarity = (word, number_neighbors = 10) => {
  return new Promise((resolve, reject) => {
    w2v.loadModel('src/models/vectors/file-1551901296659.txt', (error, model) => {
      if (error) reject();
      console.log('SIZE: ', model.size);
      console.log('WORDS: ', model.words);

      console.time('mostSimilar');
      console.log(model.mostSimilar(word, number_neighbors));
      console.timeEnd('mostSimilar');

      resolve()
    });
  });
}



module.exports = {
  train,
  analogy,
  similarity
};
