const Test = () => {
  const string = "Javascript is the best programming language";

  function testFn(params) {
    let str = params.split(" ");
    str = str.map((item) => {
      let tempItem = item.toUpperCase().split("");
      return tempItem.reduce(
        (acc, curr) => {
          acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
          if (acc[curr] > acc.max) {
            acc.max = acc[curr];
          }
          return acc;
        },
        { max: 1, word: item.toUpperCase() }
      );
    });
    let amount = 1;
    let word = "";
    for (let item of str) {
      if (item.max > amount) {
        amount = item.max;
        word = item.word;
      }
    }
    if (amount > 1) {
      return word;
    }
    return -1;
  }
  const res = testFn(string);
  console.log("RESULTS:", res);
};

Test();
