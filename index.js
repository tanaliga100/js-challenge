export const Test = () => {
  function longestWord(params) {
    let str = params.split(" ");
    let size = 0;
    let longest = [""];
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (element.length >= size) {
        size = element.length;
        if (element.length > longest[longest.length - 1].length) {
          longest = [];
          longest.push(element);
        } else {
          longest = [...longest, element];
        }
      }
    }
    return longest;
  }

  const res = longestWord("The piano sounds good");
  console.warn("RESULTS:", res);
};
