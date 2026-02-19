document.getElementById('btn-cashout').addEventListener('click', function () {
    // console.log('cashout button clicked');
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutNumber = cashOutNumberInput.value;
    if (cashOutNumber.length !== 11) {
        alert('Invalid Agent Number');
        return;
    }

    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutAmount = cashOutAmountInput.value;
    if (cashOutAmount <= 0) {
        alert('Invalid Amount');
        return;
    }

    const cashOutPinInput = document.getElementById('cashout-pin');
    const cashOutPin = cashOutPinInput.value;
    if (cashOutPin !== '2580') {
        alert('Invalid Pin');
        return;


    }

    const currentBalanceElement = document.getElementById('balance');
    const currentBalance = currentBalanceElement.innerText;
    if (Number(cashOutAmount) > Number(currentBalance)) {
        alert('Insufficient Fund');
        return;
    } else {
        alert('Cash Out Success');
        const newBalance = Number(currentBalance) - Number(cashOutAmount);
        currentBalanceElement.innerText = newBalance;
        console.log(newBalance);
    }





});