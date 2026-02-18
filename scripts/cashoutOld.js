document.getElementById('btn-cashout').addEventListener('click', function () {
    //1 get the agent number & validate 
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutNumber = cashOutNumberInput.value;
    console.log(cashOutNumber);
    if (cashOutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }
    // 2 get the amount and convert to number

    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutAmount = cashOutAmountInput.value;
    if (Number(cashOutAmount) < 0) {
        alert('Invalid Amount');
        return;
        // ei if er part ta ami nije add korechi
    }
    console.log(cashOutAmount);

    // 3 current balance , validate , convert to number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4 calculate new balance
    const newBalance = Number(balance) - Number(cashOutAmount);


    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }


    // 5 get the pin and verify
    const cashOutPinInput = document.getElementById('cashout-pin');
    const cashOutPin = cashOutPinInput.value;
    if (cashOutPin === '2580') {
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






