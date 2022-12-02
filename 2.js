let x = "here is your input information"; 
let xToVerify = typeof x 

switch (xToVerify) {
  case "number": 
    console.log(`${x} is a number`);
    break;
 
  case "string": 
    console.log(`${x} is a string`);
    break;

  case "boolean":
    console.log(`${x} is a boolean`);
    break; 

  default: 
    console.log(`type of ${x} is undefined`);
}