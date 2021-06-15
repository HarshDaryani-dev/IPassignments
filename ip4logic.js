
function set_operation(op){
    document.getElementById('operator-textbox').value ="";
    document.getElementById('operator-textbox').value =op;
}
function calculate(){
    var a = parseInt(document.getElementById('fno-textbox').value);
    var b = parseInt(document.getElementById('sno-textbox').value);
    var operation = document.getElementById("operator-textbox").value;
    var res;
    switch(operation){
        case "+":
            res = a+b;
            break;

        case "-":
            res=a-b;
            break;

        case "*":
            res=a*b;
            break;

        case "/":
            res=a/b;
            break;

        case "%":
            res = a%b;
            break;

        default:
            res="error";
            break;
    }
    document.getElementById("res-textbox").value=res;
}
function clear_input(){
    console.log("method called!");
    document.getElementById("fno-textbox").value="";
    document.getElementById("sno-textbox").value="";
    document.getElementById("operator-textbox").value="";
    document.getElementById("res-textbox").value="";
}

function number_press(n){
    if(document.getElementById("operator-textbox").value==""){
        document.getElementById("fno-textbox").value +=n;
    }
    else{
        document.getElementById("sno-textbox").value+=n;
    }
}
