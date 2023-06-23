// let x = 10;
// {
//   let x = 20;
//   const print = () => {
//     console.log(x);
//   };
//   print();
// }


const multiplyBy = (x) => {
    return (y) => x * y;
  };
  
  const double = multiplyBy(2);
  console.log(double(5));

  const outer = () => {
    const x = 10;
    const inner = () => {
      console.log(x);
    };
    return inner;
  };
  
  const innerFunc = outer();
  innerFunc();
  