
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


// machine er vitor id input dile se sobaike hide korne but jeitay click korchi seita dhore show kore dibe 

function showOnly(id) {
    const cashout = document.getElementById('cashout');
    const payBill = document.getElementById('pay-bill');
    const sendMoney = document.getElementById('send-money');
    const addMoney = document.getElementById('add-money');

    cashout.classList.add('hidden');
    payBill.classList.add('hidden');
    sendMoney.classList.add('hidden');
    addMoney.classList.add('hidden');

    // id ala k show koro
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}
