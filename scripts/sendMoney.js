document.getElementById('send-money-btn').addEventListener('click', function () {
    // console.log('Add Money Button Clicked');
    // 1 bank name get 

    // step 2 get bank account number 
    const sendMoneyNumber = getValueFromInput('send-money-number');
    if (sendMoneyNumber.length != 11) {
        alert("Invalid User Account  Number");
        return;
    }

    // stp 3 get amount 

    const sendMoneyAmount = getValueFromInput('send-money-amount');
    if (sendMoneyAmount <= 0) {
        alert('Invalid Amount');
        return;
    }

    // stp 4 get the pin and validation
    const sendMoneyPin = getValueFromInput('send-money-pin');

    if (sendMoneyPin !== '2580') {
        alert('Invalid Pin');
        return;
    } else {
        alert('Send Money Success ');
        const currentBalance = getBalance();
        const balanceAfterSendMoney = currentBalance - Number(sendMoneyAmount);
        setBalance(balanceAfterSendMoney);

    }

});