
// function hover(){
//     document.getElementsByClassName('p').style.backgroundColor = color;
// }
// function change(){
//     DocumentFragment.getElementsByClassName('p').style.backgroundColor=color;
// }
// document.getElementsByClassName("change").addEventListener("hover", change);
function change() {
    debugger
    let backgroundColor = document.getElementById('redSignal').style.backgroundColor;
    if (backgroundColor == "") {
        document.getElementById('redSignal').style.backgroundColor = "red"
    }
    else if (backgroundColor == "red") {
        document.getElementById('redSignal').style.backgroundColor = ""
    }
}
function change1() {
    debugger
    let backgroundColor = document.getElementById('greenSignal').style.backgroundColor;
    if (backgroundColor == "") {
        document.getElementById('greenSignal').style.backgroundColor = "green"
    }
    else if (backgroundColor == "green") {
        document.getElementById('greenSignal').style.backgroundColor = ""
    }
}

function change2() {
    debugger
    let backgroundColor = document.getElementById('yellowSignal').style.backgroundColor;
    if (backgroundColor == "") {
        document.getElementById('yellowSignal').style.backgroundColor = "yellow"
    }
    else if (backgroundColor == "yellow") {
        document.getElementById('yellowSignal').style.backgroundColor = ""
    }
} function change3() {
    debugger
    let backgroundColor = document.getElementById('orangeSignal').style.backgroundColor;
    if (backgroundColor == "") {
        document.getElementById('orangeSignal').style.backgroundColor = "orange"
    }
    else if (backgroundColor == "orange") {
        document.getElementById('orangeSignal').style.backgroundColor = ""
    }
}