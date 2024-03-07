//q1
let a = "extravaganza"
let removechar = a.substring(8,0);
console.log({removechar});

//q2
const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});


//q3
const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

//q4
const string1 = "The pupils are reading in the library";
const substring = 'are';
console.log(string1.includes(substring));

const string2 = "The child was sitting on the table before it felt";
const substring2 = 'sitting';
console.log(string2.includes(substring2));

//q5
let Upper = "wonderful";
let uppercase = Upper.toUpperCase();
console.log({uppercase});

let Lower = "AMAZING";
let lowercase = Lower.toLowerCase();
console.log({lowercase});


let word ="UndERneath";
let Lowercase = word.toLowerCase();
console.log({Lowercase});


let text = "A wonderful world";
let title = text.title();

console.log({title});