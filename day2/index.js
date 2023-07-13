const fs = require("fs");
const readFile = fs.readFile;
const readTextPromise = () => {
  return new Promise((resolve, reject) => {
    readFile("./day2/input.txt", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const readText = async () => {
  const text = await readTextPromise();
  const arr = text.split("\n");
  const results = {};
  results["A X"] = 3;
  results["A Y"] = 4;
  results["A Z"] = 8;
  results["C X"] = 2;
  results["C Y"] = 6;
  results["C Z"] = 7;
  results["B X"] = 1;
  results["B Y"] = 5;
  results["B Z"] = 9;
  const result = arr.reduce((acc, curr) => {
    return acc + results[curr];
  }, 0);
  console.log(result);
};
readText();
