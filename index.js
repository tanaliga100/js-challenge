const Test = () => {
  function testFn(params) {
    const str = params.split(" ");
    const newWord = str.map((word) => {
      if (word.length >= 5) {
        let words = word.split("").reverse().join("");
        return words;
      } else {
        return word;
      }
    });
    return newWord.join(" ");
  }
  const res = testFn("Hey Codplay Im surely miss you");
  console.log("RESULTS:", res);
};

Test();
