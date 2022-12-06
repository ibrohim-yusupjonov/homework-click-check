// #1
// function func(){
// var name = document.getElementById("name").value ; 
// var username = document.getElementById("username").value;
// var phone = document.getElementById("phone_number").value;
// console.log(name)
// console.log(username)
// console.log(phone)}
// btn.addEventListener("click", () => 
// func() )  ;
   

// #2
// function func(){
//  let b  = prompt( "Xafta kunini kiriting" );
//  if( b == 'dushanba' || b == 'chorshanba' || b == 'juma') {
//  console.log("Bugun najot talimda darsingiz bor")
//  }else {
//  console.log("Bugun darsigiz yoq")
// }
// }
// func()

// #3
// function func(){
//     let son = prompt("Juft va toq sonlarni aniqlash");
//     let qolgan_son = son % 2;
//     if(qolgan_son == 0) {
//     console.log("Juft son");
//     } else {
//     console.log("Toq son")
// }
// }
// func()

// #4
window.onload = function () {
    let click = document.getElementById("image_click");
    click.onclick = incrementClick;
    let reset = document.getElementById("reset-button");
    reset.onclick = resetCounter;
}

var counterVal = 0;

incrementClick = function() {
    updateDisplay(++counterVal);
}
function resetCounter() {
    counterVal = "";
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    console.log("updateDisplay");
    document.getElementById("counter").innerHTML = val
}
