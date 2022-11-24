const Test = () => {
  function testFn(params) {
    return params;
  }

  console.log("Results", testFn([1, -2, 5, 7, 8]));
  console.log("Results", testFn([1, -7, 8]));
  console.log("Results", testFn([1, 2, -5, 7, 8]));
};

Test();
