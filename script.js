const input = document.getElementById("number-input");
const result  = document.getElementById("result");


function handleClickButton(el) {
    console.log(el.innerText);
    // console.log(input.value);
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;
    if (['+', '-', '*', '/'].includes(el.innerText)) return;
    result.value = eval(exp)


}

function clean() {
    input.value = "";
    result.value = "";
}