//Numbers, Number methods and array methods
const nArr = [1, 2, 3, 4, 5];
const strArr = ["James", "Andrea", "Symphony", "Quebec"];
console.log("Array methods");
console.log(`Arrays in use: [${strArr}] and [${nArr}]\n`);
//Methods
//find index of element
console.log(`1: array.indexOf("Quebec") => ${strArr.indexOf("Quebec")}`);
//join array into string with a specified separator
console.log(`2: array.join("-") => ${strArr.join("-")}`);
//check if the array includes a certain element
console.log(`3: array.includes("Jimmy") => ${strArr.includes("Jimmy")}`);
//remove element from end of array and return it
console.log(`4: array.pop() => ${strArr.pop()}`);
//concatenate two arrays
console.log(`5: array.concat(["Paris"]) => ${strArr.concat(["Paris"])}\n`);
//return a new array comprising elements that pass a callback function test
console.log(
  `6: array.filter( (x) => x % 2 == 0 ) => ${nArr.filter((x) => x % 2 == 0)}`
);
//return a new array with a function applied to each element
console.log(`7: array.map( (x) => x**2 ) => ${nArr.map((x) => x ** 2)}`);
//reduce values of an array into a single value using callback function
console.log(
  `8: array.reduce( (prev, curr) => prev + curr ) => ${nArr.reduce(
    (x, y) => x + y
  )}`
);
//reverse element order in the array
console.log(`9: array.reverse() => ${nArr.reverse()}`);
//add element to beginning of array
console.log(`10: array.unshift(6) => ${nArr.unshift(6)}`);
