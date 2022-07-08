const dateofbirth = document.querySelector("#dateofbirth");
const luckynumber = document.querySelector("#luckynumber");
const checkbutton = document.querySelector("#checkbutton");
const output = document.querySelector("#output");

checkbutton.addEventListener("click", checkvalues);

function checkvalues(){
    const date = dateofbirth.value;
    const lucky = luckynumber.value;
    if(date && lucky){
        const sum = calculate(date);
        const result= checkLucky(sum, lucky);
        console.log(sum);
    }
    else{
        output.innerText = "Fill all values";
    }
}

function calculate(dateone){
    let total = 0;
    dateone = dateone.replaceAll("-","");
    for(let digit of dateone){
    total = total + Number(digit);
    }
    return total;
}

function checkLucky(sum1, lucky1){
    if(sum1%lucky1===0){
        output.innerText = "The number is lucky for you !";
    }else{
        output.innerText = "The number is not lucky for you !";
}
}