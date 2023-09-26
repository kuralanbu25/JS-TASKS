let counter = 0;
const number = document.getElementById("number");

function increment() {
  counter++;
  console.log("Increment is " + counter);
  number.innerText = counter;
}

function decrement() {
  if(counter>0){
    counter--;
  console.log("Decrement is " + counter);
  number.innerText = counter;
}
}


   