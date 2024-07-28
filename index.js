
const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const resultElement = document.getElementById("resultElement");
let age;


mybtn.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `you are too old to enter this site`;
    }
    else if (age == 0){
        resultElement.textContent = `you cant enter.you are born now`;
    }
    else if (age >= 18){
        resultElement.textContent = `your age is enough to enter this site`;
    }
    else if (age < 0){
        resultElement.textContent = `your age cant be blow zero`;
    }
    else {
        resultElement.textContent = `you must be +18 to enter this site`;
    }
}