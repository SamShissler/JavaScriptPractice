const count = document.getElementById("number");
const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const cle = document.getElementById("clear");


function decrease(){
    let curr = parseInt(count.innerHTML);
    console.log("We're decreasing");
    count.innerHTML = curr - 1;
}

function increase(){
    let curr = parseInt(count.innerHTML);
    console.log("We're increasing");
    count.innerHTML = curr + 1;
}

function clear(){
    console.log("We're clearing");
    count.innerHTML = 0;
}

dec.addEventListener("click", decrease);
inc.addEventListener("click", increase);
cle.addEventListener("click", clear);