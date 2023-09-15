function fibonacci(num) {
  // type your code here
  let res = 0
  let next = 1
  temp = 0
  for (let i = 0; i < num; i++) {
    temp = res
    res = next
    next += temp
  }
  return res
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
