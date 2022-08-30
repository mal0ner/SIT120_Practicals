//Date API JavaScript
const date = new Date();

//to UTC string
console.log(`1: convert date to string => ${date.toUTCString()}`);
console.log(`2: get full year => ${date.getFullYear()}`);
console.log(`3: get month => ${date.getMonth() + 1}`);
console.log(`4: get day of month => ${date.getDate()}`);
console.log(`5: get hours => ${date.getHours()}`);
console.log(`6: get seconds => ${date.getSeconds()}`);
console.log(`7: time zone offset => ${date.getTimezoneOffset()} mins`);
console.log(`8: get time string => ${date.toTimeString()}`);
