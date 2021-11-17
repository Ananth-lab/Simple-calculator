let valueA = document.querySelector('#vala');
let valueB = document.querySelector('#valb');
let addition = document.querySelector("#add");
let subtraction = document.querySelector('#subtract');
let multiplication = document.querySelector('#multiply');
let devision =document.querySelector('#divide');
let answerSheet =document.getElementById("ans");
function add(){
    answerSheet.textContent = Number(valueA.value) + Number(valueB.value);
}
function sub(){
    answerSheet.innerText = Number(valueA.value) - Number(valueB.value);
}
function mul(){
    answerSheet.innerText = Number(valueA.value) * Number(valueB.value);
}
function div(){
    answerSheet.innerText = Number(valueA.value) / Number(valueB.value);
}
addition.addEventListener('click', add)
subtraction.addEventListener('click', sub)
multiplication.addEventListener('click', mul)
devision.addEventListener('click', div)


