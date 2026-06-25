let display = document.getElementById("display");
let memory = 0;
let isOn = true;

function powerOn(){
    isOn = true;
    display.value = "0";
}

function powerOff(){
    isOn = false;
    display.value = "";
}

function append(value){
    if(!isOn) return;

    if(display.value === "0"){
        display.value = value;
    }else{
        display.value += value;
    }
}

function clearDisplay(){
    if(!isOn) return;
    display.value = "0";
}

function clearEntry(){
    if(!isOn) return;

    display.value = display.value.slice(0,-1);

    if(display.value === ""){
        display.value = "0";
    }
}

function calculate(){
    if(!isOn) return;

    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Erro";
    }
}

function percent(){
    if(!isOn) return;

    display.value = parseFloat(display.value)/100;
}

function sqrt(){
    if(!isOn) return;

    display.value = Math.sqrt(parseFloat(display.value));
}

function inverse(){
    if(!isOn) return;

    display.value = 1/parseFloat(display.value);
}

function memoryClear(){
    memory = 0;
}

function memoryRecall(){
    if(!isOn) return;

    display.value = memory;
}

function memoryAdd(){
    if(!isOn) return;

    memory += Number(display.value);
}

function memorySubtract(){
    if(!isOn) return;

    memory -= Number(display.value);
}