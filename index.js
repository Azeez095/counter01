// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
let resetel = document.getElementById("reset-btn");
let count = 0

function increment(){
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function save(){
    let countDash = count + " - ";
    saveEl.textContent += countDash;
    countEl.textContent = 0;
    count = 0;
  }

  
















