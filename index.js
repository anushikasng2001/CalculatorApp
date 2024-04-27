function display(value){
    document.getElementById("result").value += value
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function back(){
    var ev = document.getElementById("result");
    ev.value = ev.value.slice(0, -1);
}

function calculate(){
    var exp = document.getElementById("result").value;
    var output = eval(exp);
    document.getElementById("result").value = output;
}