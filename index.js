const Test = () => {
  const uniqueValues = (params) => {
    // USE CASE IN THE ARRAY METHOD
    // const str = params.split("");
    // let uniqueValues = [];
    // console.log(Array.isArray(str) ? "oo" : "hindi");
    // for (let letter of str) {
    //   if (uniqueValues.indexOf(letter) === 0)
    //     return `Oops! There are duplicate values`;
    //   uniqueValues.push(letter);
    // }
    // return uniqueValues;
    // USE IN THE OBJECT
    // const str = params.split("");
    // let uniqueValues = {};
    // let val = 1;
    // for (let letter of str) {
    //   if (uniqueValues[letter]) {
    //     return false;
    //   }
    //   uniqueValues[letter] = val++;
    // }
    // return uniqueValues;
    // USING THE INDEX || NORMAL FOR LOOP
    const str = params.split("");
    let uniqueValues = [];
    for (let i = 0; i < str.length; i++) {
      let curr = str[i];
      let index = i;
      if (str.lastIndexOf(curr) !== index) {
        return "duplicate values are : " + str[i].split(" ");
      } else {
        return [...uniqueValues, str];
      }
    }
    return;
  };
  // const instruments = ["guitar", "piano", "brass", "piano"];
  console.log("FIRST_RESULTS_:", uniqueValues("cbcdefg"));
  console.log("SECOND_RESULTS_:", uniqueValues("abcdefg"));

  // console.log("RESULTS_:", uniqueValues(person));
  // console.log("RESULTS_:", uniqueValues(instruments));
};

Test();
