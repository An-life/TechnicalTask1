 function createCounter(initialNumber, maxNumber, minNumber){
    let containerForCounter = document.querySelector("#container");
    let counterContainer = document.createElement("div");
    containerForCounter.appendChild(counterContainer);

    const counterLogic = {
        counter: initialNumber,
        decrement: function() {
            counterLogic.counter--;
            counterInput.setAttribute("value", `counter: ${counterLogic.counter}`);
        }, 
        increment: function() {
            counterLogic.counter++;
            counterInput.setAttribute("value", `counter: ${counterLogic.counter}`);
        }
    };
   
    let counterInput= document.createElement("input");
    counterInput.setAttribute("disabled", "disabled");
    counterInput.setAttribute("value", `counter: ${counterLogic.counter}`);

    let plusButton=document.createElement("button");
    plusButton.appendChild(document.createTextNode("+"));

    plusButton.onclick = function (){ 
        counterLogic.increment();

    if (res.counter>=maxNumber){
        plusButton.setAttribute("disabled", "disabled");
     }  else   {
         plusButton.removeAttribute("disabled");
         minusButton.removeAttribute("disabled"); 
        };
      }

     let minusButton=document.createElement("button");
     minusButton.appendChild(document.createTextNode("-"));
     
     minusButton.onclick = function (){
        counterLogic.decrement();
     
     if(counterLogic.counter<=minNumber) {
         minusButton.setAttribute("disabled", "disabled");
     }  else   {
         minusButton.removeAttribute("disabled")
         plusButton.removeAttribute("disabled")
        }; 
    };

    if (counterLogic.counter>=maxNumber){
         plusButton.setAttribute("disabled", "disabled");
     } 

    if(counterLogic.counter<=minNumber) {
         minusButton.setAttribute("disabled", "disabled");
     }      

     counterContainer.prepend(minusButton, plusButton, counterInput);
  
     return counterLogic;
 }

createCounter(10,10, 0);
createCounter(4, 5, 2);

const counter1=createCounter(10,16, 0);
const counter2=createCounter(4,5, 0);
const counter3=createCounter(7,10, 0);

console.log(counter1.counter);
console.log(counter2.counter);
console.log(counter3.counter);

console.log(counter1.counter);
counter1.decrement();
console.log(counter1.counter);
console.log(counter2.counter);
counter2.increment();
console.log(counter2.counter);
