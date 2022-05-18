var left_value = 0;
function left_func() {
    var inner = document.getElementById("inner");
    left_value = left_value - 100;
    if (left_value < -400) {
        left_value = -400;
    }
    inner.style.left = left_value+"px"; 
}

function right_func() {
    var inner = document.getElementById("inner");
    left_value = left_value + 100;
    if (left_value > 0) {
        left_value = 0;
    }
    inner.style.left = left_value+"px"; 
}

// let myNum = 1;
// const totalNum = 3;

// function numberSetting() {
//     document.getElementById("num").innerText = myNum;
// }
// numberSetting();

// document.getElementById("btn_prev").onclick = function() {
//     console.log("이전버튼");
//     if(myNum == 1){
//         myNum = totalNum;
//     } 
//     else {
//         myNum--;
//     }
//     numberSetting();
// };
// document.getElementById("btn_next").onclick = function() {
//     console.log("다음버튼");
//     if(myNum == totalNum){
//         myNum = 1;
//     } 
//     else {
//         myNum++;
//     }
//     numberSetting();
//     document.getElementById("pic").style.border = "3px solid blue";
//     document.getElementById("pic").style.left = "500px";
// };
