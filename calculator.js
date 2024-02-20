let btn = document.querySelectorAll("button");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");
let modu = document.querySelector(".modu");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let finalans = document.querySelector(".finalans p");
let reset = document.querySelector(".reset");
add.addEventListener("click", add = () => {
    let a = parseFloat(first.value);
    let b = parseFloat(second.value);
    finalans.innerText = `Result: ${a + b}`;
});
sub.addEventListener("click", sub = () => {
    let a = parseFloat(first.value);
    let b = parseFloat(second.value);
    finalans.innerText = `Result: ${a - b}`;
});
multi.addEventListener("click", multi = () => {
    let a = parseFloat(first.value);
    let b = parseFloat(second.value);
    finalans.innerText = `Result: ${a * b}`;
});
divi.addEventListener("click", divi = () => {
    let a = parseFloat(first.value);
    let b = parseFloat(second.value);
    if(a == 0 & b == 0){
        
    finalans.innerText = `Result: 0`;
    }
    else{
        finalans.innerText = `Result: ${a / b}`;
    }
});
modu.addEventListener("click", modu = () => {
    let a = parseFloat(first.value);
    let b = parseFloat(second.value);
    if(b == 0){
        finalans.innerText = `Second value not be zero`
    }
    else{
    finalans.innerText = `Result: ${a % b}`;
}
});

reset.addEventListener("click", () => {
    first.value = "0";
    second.value = "0";  
    finalans.innerText = `Waiting For Input...`;
})