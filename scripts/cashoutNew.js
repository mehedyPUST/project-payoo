
document.getElementById('btn-cashout').addEventListener('click', function () {
    // 1 get the agent number and validate 

    const cashOutNumber = getValueFromInput('cashout-number');
    if (cashOutNumber.length != 11) {
        alert("Must be exactly 11 digits");
        return;
    }
    // 2  get the amount 
    const cashOutAmount = getValueFromInput('cashout-amount');
    if (Number(cashOutAmount) < 0) {
        alert('Invalid Amount');
        return;
        // ei if er part ta ami nije add korechi
    }


    // 3  get the current balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4 calculate balance 
    const newBalance = Number(balance) - Number(cashOutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    //5 pin 
    const pin = getValueFromInput('cashout-pin');
    console.log(pin);
    if (pin === '2580') {
        // 5-1 ::true show an alert >> set balance
        alert('Cashout Successfull');
        console.log('New Balance:', newBalance);
        balanceElement.innerText = newBalance;

    } else {
        // 5-2  ::false show anerror alert > return
        alert('Invalid Pin');
        return;
    }



});
