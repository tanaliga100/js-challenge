const Test = () => {
  const products = [
    { title: "Iphone 8", company: "Apple" },
    { title: "Samsung A20", company: "Samsung" },
    { title: "Galaxy S5", company: "Samsung" },
    { title: "Iphone 10", company: "Apple" },
    { title: "Iphone X", company: "Apple" },
    { title: "ThinkPad", company: "Lenovo" },
    { title: "Ideapad 3", company: "Lenovo" },
  ];

  function testFn(params) {
    // USING MAP
    let tempArray = params.map((item) => item.company);
    return [...new Set(tempArray)];
    // USING REDUCE
    return [
      ...params.reduce((acc, curr) => {
        acc.add(curr.company);
        return acc;
      }, new Set()),
    ];
  }
  const res = testFn(products);
  console.warn("RESULTS:", res);
};

Test();
