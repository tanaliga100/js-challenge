const Test = () => {
  function testFn(params) {
    // LONG METHOD
    // let tempString = new Set();
    // for (let letter in params) {
    //   if (tempString.has(letter)) {
    //     return false;
    //   }
    //   tempString.add(params[letter]);
    // }
    // return tempString;
    // SHORT METHOD

    let tempString = new Set();
    for (let letter in params) {
      if (tempString.has(letter)) {
        return "already exists";
      }
      tempString.add(params[letter]);
    }
    return tempString;
  }
  const res = testFn([1, 2, 3, 4, 5, 5]);
  console.warn("RESULTS:", res);
};

Test();
