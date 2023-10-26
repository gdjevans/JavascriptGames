document.addEventListener('keydown', (event) => {
    if(event.key == "0") {calc.display.value+='0'}
    else if (event.key == "1") {calc.display.value+='1'}
    else if (event.key == "2") {calc.display.value+='2'}
    else if (event.key == "3") {calc.display.value+='3'}
    else if (event.key == "4") {calc.display.value+='4'}
    else if (event.key == "5") {calc.display.value+='5'}
    else if (event.key == "6") {calc.display.value+='6'}
    else if(event.key == "7") {calc.display.value+='7'}
    else if(event.key == "8") {calc.display.value+='8'}
    else if(event.key == "9") {calc.display.value+='9'}
    else if(event.key == "+") {calc.display.value+='+'}
    else if(event.key == "-") {calc.display.value+='-'}
    else if(event.key == "*") {calc.display.value+='*'}
    else if(event.key == "/") {calc.display.value+='/'}
    else if(event.key == ".") {calc.display.value+='.'}
    else if(event.key == "c") {calc.display.value=''}
    else if(event.key == "Enter") {calc.display.value=eval(calc.display.value)}
});