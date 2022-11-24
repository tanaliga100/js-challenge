const Test = () => {
  function testFn(params) {
    let tempArr = params.sort((x, y) => {
      return x - y;
    });
    let largest = tempArr.pop();
    let number = 0;
    tempArr.reduce((acc, curr) => {
      number = number + curr;
      return acc;
    }, 0);
    return number === largest ? "Correct Summation" : "Incorrect Summation";
  }

  const res = testFn([1, 11, 3, 5, 101]);
  const res2 = testFn([1, 2, 3, 6]);

  console.warn("RESULTS:", res);
  console.warn("RESULTS:", res2);
};

Test();
