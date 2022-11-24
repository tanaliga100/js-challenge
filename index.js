const Test = () => {
  //LONG - METHOD
  // function capitalizeLetter(params) {
  //   const str = params.split(" ").map((letter) => {
  //     let first = letter.charAt(0).toUpperCase();
  //     let rest = letter.slice(1);
  //     return `${first}${rest}`;
  //   });

  //   return str.join(" ");
  // }
  // SHORT METHOD
  const capitalizeLetter = (params) => {
    const str = params
      .split(" ")
      .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1));
    return str.join(" ");
  };

  const res = capitalizeLetter("this is a test ");
  console.warn("RESULTS:", res);
};

Test();
