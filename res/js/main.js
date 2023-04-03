const field = document.getElementById("field");
const hp = document.getElementById("hp");
const counter = document.getElementById("counter");

let numberOfHp = 100;
let numberOfHpOnClick = 90; 





hp.onclick = () => {
    numberOfHp -= numberOfHpOnClick;
    counter.innerHTML = `HP : ${numberOfHp}`;
}

field.innerHTML = `HP : ${hp}`;
counter.innerHTML = `HP: ${numberOfHp}`;