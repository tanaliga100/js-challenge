export const Test = () => {
  function testFn(params) {
    return params;
  }

  const res = testFn("THIS IS A TEST ");
  console.warn("RESULTS:", res);
};
