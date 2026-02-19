
// machine id >>> input value return
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
};




// get balance er machine ----> balance return

function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(Number(balance))
    return Number(balance);


}

// balance set machine
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}
// 24-11 7.21
