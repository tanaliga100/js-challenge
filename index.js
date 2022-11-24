const Test = () => {
  function mathSequence(numbers) {
    const arr = numbers.map(Math.abs);
    let arith = new Set();
    let geo = new Set();
    for (let i = 1; i < arr.length; i++) {
      // note ! arr[i] = is the first index of the array
      // note ! i subtract arr[i] to the last index of the array which is index zero
      const num1 = arr[i] - arr[i - 1];
      arith.add(num1);
      const num2 = arr[i] / arr[i - 1];
      geo.add(num2);
    }
    if (arith.size === 1) {
      return `Arithmetic`;
    } else if (geo.size === 1) {
      return `Geometric`;
    } else {
      return -1;
    }
  }

  console.log("RESULTS_:", mathSequence([2, -4, 6, 8, 10]));
  console.log("RESULTS_:", mathSequence([3, 9, -27]));
  console.log("RESULTS_:", mathSequence([2, 8, 23, 76]));
};

Test();
