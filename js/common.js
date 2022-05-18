var left_value = 0;
function left_func() {
    var inner = document.getElementById("inner");
    left_value = left_value - 600;
    if (left_value < -1200) {
        left_value = -1200;
    }
    inner.style.left = left_value+"px"; 
}

function right_func() {
    var inner = document.getElementById("inner");
    left_value = left_value + 600;
    if (left_value > 0) {
        left_value = 0;
    }
    inner.style.left = left_value+"px"; 
}
