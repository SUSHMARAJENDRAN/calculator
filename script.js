
let userinput = document.querySelector(".userinput");
let expres = '';

function press(num) {
    expres += num;
    userinput.value = expres;
}

function equal() {
    userinput.value = eval(expres);
    expres = '';
}

function earse() {
    expres = '';
    userinput.value = ''; // Update the input field value to clear it
}






