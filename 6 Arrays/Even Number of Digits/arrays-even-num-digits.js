const findNumbers = (nums) => {
  return nums.filter((e) => e.toString().split("").length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // expected 2
