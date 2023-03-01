function dis(val) {
    document.getElementById("text").value += val
}
function clr() {
    document.getElementById("text").value = ""
}
function sol() {
    let x = document.getElementById("text").value
    let y = eval(x)
    document.getElementById("text").value=y
}
function del() {
    let display = document.getElementById("text");
    let currentValue = display.value;
    if (currentValue.length === 1) {
        display.value = "0";
    } else {
        display.value = currentValue.slice(0, -1);
    }
}
