const Test = () => {
  function testFn(params) {
    let tempArr = [...new Set(params)].sort((x, y) => x - y);
    if (tempArr.length < 2) {
      return `${tempArr[0]}`;
    } else if (tempArr.length === 2) {
      return ` ${tempArr[0]} and ${tempArr[1]}`;
    } else if (tempArr.length === 3) {
      return ` ${tempArr[1]}`;
    } else {
      return `${tempArr[1]}  ${tempArr[tempArr.length - 2]}`;
    }
  }

  console.log("Results", testFn([1]));
  console.log("Results", testFn([9, 1]));
  console.log("Results", testFn([76, -7, 8]));
  console.log("Results", testFn([26, 2, -5, 7, 100]));
  console.log("Results", testFn([11, 1, -2, 2, 5, 7, 12]));
};

Test();
