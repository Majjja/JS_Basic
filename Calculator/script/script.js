let num1 = document.getElementById("num-01");
let num2 = document.getElementById("num-02");
let num3 = document.getElementById("num-03");
let num4 = document.getElementById("num-04");
let num5 = document.getElementById("num-05");
let num6 = document.getElementById("num-06");
let num7 = document.getElementById("num-07");
let num8 = document.getElementById("num-08");
let num9 = document.getElementById("num-09");
let num0 = document.getElementById("num-0");

let bulletBtn = document.getElementById("bullet-btn");
let divisionBtn = document.getElementById("division-btn");
let multipleBtn = document.getElementById("multiple-btn");
let minusBtn = document.getElementById("minus-btn");
let plusBtn = document.getElementById("plus-btn");
let equalBtn = document.getElementById("equal-btn");

let clearBtn = document.getElementById("clear-btn");
let backspaseBtn = document.getElementById("backspase-btn");

// let displayScreen = document.getElementById("display-screen");
let displayNum = document.getElementById("display");

let numberBtns = document.getElementsByClassName("btn-nums");
let operatorBtns = document.getElementsByClassName("btn-operator");

let displayNumNewVal = '0';
let pendingNumber;
let arrayOfumbers = [];


let updateDisplay = (clickedNum) => {
    let number = clickedNum.target.innerText;
    arrayOfumbers.push(number);
    displayNum.innerText = arrayOfumbers.join("")
}

backspaseBtn.onclick = () => {
    arrayOfumbers.pop()
    displayNum.innerText = arrayOfumbers.join("");
    displayNum.innerText === "" ? displayNum.innerText = displayNumNewVal : displayNumNewVal;
}

clearBtn.onclick = () => {
    arrayOfumbers.splice(0, arrayOfumbers.length);
    displayNum.innerText = arrayOfumbers;
    displayNum.innerText === "" ? displayNum.innerText = displayNumNewVal : displayNumNewVal;
}

bulletBtn.onclick = (dot) => {
    let bullet = dot.target.innerText;
    if (!arrayOfumbers.includes(bullet)) {
        arrayOfumbers.push(bullet)
    }
    displayNum.innerText = arrayOfumbers.join("");
}

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", updateDisplay);
}


// let calculatingNumbers = (operator) => {
//     let clickedOperator = operator.target.innerText;
//     arrayOfumbers.push(clickedOperator)
//     newArrayOfumbers = arrayOfumbers.slice(0, arrayOfumbers.length);
//     if (displayNum.innerText = clickedOperator) {
//         displayNum.innerText = "";
//     };
//     console.log(newArrayOfumbers)
//     console.log(arrayOfumbers)
// }

// console.log(newArrayOfumbers)

// equalBtn.onclick = () => {
//     let array = arrayOfumbers.concat(newArrayOfumbers);
//     let equelizing = array.join("")
//     console.log(arrayOfumbers.join(""))
//     let equal = eval(equelizing);
//     displayNum.innerText = equal
// }

// plusBtn.onclick = (operator) => {
//     let plus = operator.target.innerText;
//     if (plus.clicked === true) {
//         arrayOfumbers.push(plus)
//             // continue;
//     }

// }



// let newArrayOfumbers2 = ["3", "3", "4", '5'];

plusBtn.addEventListener('click', () => {
    sum(displayNum)
})

function sum(element) {
    // arrayOfumbers.join("");
    element.innerText = '';
    let sum = 0;
    for (let i = 0; i < arrayOfumbers.length; i++) {
        sum += Number(arrayOfumbers[i]);
    }

    element.innerText = sum;
    return sum;
}

// function multiply() {
//     // arrayOfumbers.join("");
//     let multiply = 1;
//     for (let i = 0; i < newArrayOfumbers2.length; i++) {
//         multiply *= Number(newArrayOfumbers2[i]);
//     }
//     console.log(multiply)
//     return multiply;
// }
// console.log(multiply())





function multiply() {
    // arrayOfumbers.join("");
    let multiply = 1;
    for (let i = 0; i < arrayOfumbers.length; i++) {
        multiply *= Number(arrayOfumbers[i]);
    }
    console.log(multiply)
    return multiply;
}
console.log(multiply())

// console.log(newArrayOfumbers2)



function calcOperations() {
    let operation;
    switch (operation) {
        case "+":
            plusBtn.addEventListener('click', () => {
                console.log(arrayOfumbers)
                sum()
                console.log(sum())
                console.log('hello')

                displayNum.innerText = ''
            })
            break;
        case "-":
            multiply();
            console.log(arrayOfumbers)

            break;
        case "=":
            displayNum.innerText = sum();
            console.log(arrayOfumbers)

            multiply();
            break;
        default:
            console.log(arrayOfumbers)

            break;
    }
    return operation
}

calcOperations()

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", calcOperations);
}




// let calculatingNumbers = (operator) => {
//     switch(operator) {
//         case plusBtn.target.innerText:

//     }
// }

// for (let i = 0; i < operatorBtns.length; i++) {
//     operatorBtns[i].addEventListener("click", calculatingNumbers);
// }


// let bTns = document.getElementsByClassName("cleAr");
// let backAcBullet = (pressedBtn) => {
//     switch (pressedBtn) {
//         case backspaseBtn:
//             arrayOfumbers.pop()
//             displayNum.innerText = arrayOfumbers.join("");
//             displayNum.innerText === "" ? displayNum.innerText = displayNumNewVal : displayNumNewVal;
//             break;
//         case clearBtn:
//             arrayOfumbers.splice(0, arrayOfumbers.length);
//             displayNum.innerText = arrayOfumbers;
//             displayNum.innerText === "" ? displayNum.innerText = displayNumNewVal : displayNumNewVal;
//             break;
//         case bulletBtn:
//             let bullet = dot.target.innerText;
//             if (!arrayOfumbers.includes(bullet)) {
//                 arrayOfumbers.push(bullet)
//             }
//             displayNum.innerText = arrayOfumbers.join("");
//             break;
//     }
// }
// for (let i = 0; i < bTns.length; i++) {
//     bTns[i].addEventListener("click", backAcBullet);
// } 


// let arrr = ["3", "*", "3", "+", "3", "+", "3"];

let arrr = ["3", "3", "3", "3"];
console.log(arrr.join(''))
console.log(arrr)


// let newarrr = arrr.join("")
// let operating = eval(newarrr)
// console.log(operating)