document.getElementById('btn-cashout').addEventListener('click', function () {
    // console.log('cashout button clicked');
    const cashOutNumber = valueExtratorFromInput('cashout-number');
    if (cashOutNumber.length !== 11) {
        alert('Invalid Agent Number');
        return;
    }
    const cashOutAmount = valueExtratorFromInput('cashout-amount');
    if (cashOutAmount <= 0) {
        alert('Invalid Amount');
        return;
    }
    const cashOutPin = valueExtratorFromInput('cashout-pin');
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
