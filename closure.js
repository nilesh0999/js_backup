// we can access variable or parameter of parent function into child function.

const addition = (a, b) => {
  // let a=10;
  // let b=20;
  console.log("adition of a+b is = ", a + b);

  const substraction = () => {
    console.log("substraction of a-b is = ", a - b);
  };

  const multipication = () => {
    console.log("multipication of a*b is = ", a * b);
  };

  const division = () => {
    console.log("division of a/b is = ", a / b);
  };
  substraction();
  multipication();
  division();
};
addition(10, 5);
