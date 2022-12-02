let arr = [1, 1, 1, 1];

let res = false; 

for (let i = 0; i <= arr.length - 1 ; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (i !== j) {
      if (arr[i] == arr[j]) {
        res = true; 
        break; 
        } 
      }
  } 
        if (res) {break;} 
};
console.log ("Одинаковые элементы в массиве?"); 
console.log (res);


let res2 = true; 

for (let i = 0; i <= arr.length - 1 ; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (i !== j) {
      if (arr[i] !== arr[j]) {
        res2 = false;  
        break; 
        } 
      }
  } 
        if (res2) {break;} 
};
console.log ("Все ли элементы в массиве одинаковые?")
if (res2) { 
  console.log ("All elements are equal");  
} else { console.log ("Not all elements are equal"); }
