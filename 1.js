let clientNumber = prompt ('Please enter your number here'); 

clientNumber = + clientNumber; 

if (typeof clientNumber == "number" && !isNaN(clientNumber)){
  if (clientNumber % 2 == 0) {
    console.log (`number ${clientNumber} is even`)
  } else {
    console.log (`number ${clientNumber} is odd`)
  }
} else {
  console.log ("Oops, looks like you made a mistake")
}