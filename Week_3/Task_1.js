const myString = "Hello, this is Cameron";

console.log(`String we will use: ${myString}\n`);
console.log(`1: String length: ${myString.length}`);
console.log(`2: String.slice(-7): ${myString.slice(-7)}`);
console.log(
  `3: String.replace("Cameron", "Jebediah"): ${myString.replace(
    "Cameron",
    "Jebediah"
  )}`
);
console.log(`4: String.concat(" Malone"): ${myString.concat(" Malone")}\n`);

let whitespace = "Hello             ";
console.log(`String with trailing whitespace: ->${whitespace}<-`);
let trimmed = whitespace.trimEnd();
console.log(`5: After String.trimEnd(): ->${trimmed}<-`);
let split = trimmed.split("");
console.log(`6: Split string into array: [${split}]`);
let charCode = trimmed.charCodeAt(0);
console.log(`7: Unicode for character 'H': ${charCode}`);
