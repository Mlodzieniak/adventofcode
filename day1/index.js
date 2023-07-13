const fs = require("fs");
const readFile = fs.readFile;
const readTextPromise = () => {
  return new Promise((resolve, reject) => {
    readFile("./day1/input.txt", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
const readText = async () => {
  const text = await readTextPromise();
  const arr = text.split("\n");
  const mostCaloriesElf = [];
  arr.reduce((acc, curr, i) => {
    if (curr === "") {
      mostCaloriesElf.push(acc);
      return 0;
    } else {
      return acc + parseInt(curr);
    }
  }, 0);
  console.log(
    mostCaloriesElf
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 3)
      .reduce((a, b) => a + b)
  );
};
readText();
