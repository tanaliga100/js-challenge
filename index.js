const Test = () => {
  function getPositions(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.toUpperCase().charCodeAt(i);
      if (code > 64 && code < 91) result += code - 64 + " ";
    }
    return result.slice(0, result.length - 1);
  }

  const results = getPositions("coldplay'");
  console.log(results);
};
Test();

// const alph = "abcdefghijklmnopqrstuvwxyz".split("");
// const words = str.split(" ").join("").split("");
// const toReturn = words.map((x, i) => {
//   console.log("index", i);
//   return alph.indexOf(x.toLowerCase()) + 1;
// });
// return toReturn;
