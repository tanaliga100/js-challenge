const Test = () => {
  function testFn(params) {
    let withOutVowels = [];
    const words = params.split(" ").join("").split("");
    for (let i = 0; i < words.length; i++) {
      if (
        words[i].toLowerCase() === "a" ||
        words[i].toLowerCase() === "e" ||
        words[i].toLowerCase() === "i" ||
        words[i].toLowerCase() === "o" ||
        words[i].toLowerCase() === "u"
      ) {
        continue;
      }
      withOutVowels.push(words[i]);
    }
    return withOutVowels.toString();
  }
  const res = testFn("THIS IS A TEST ");
  console.log("RESULTS:", res);
};
Test();
