document.getElementById('add-money-btn').addEventListener('click', function () {
    // console.log('Add Money Button Clicked');
    // 1 bank name get 
    const bankName = getValueFromInput('add-money-bank');
    // console.log(bankName);
    if (bankName == 'Select a Bank') {
        alert("Please Select A Bank");
        return;
    }
    // step 2 get bank account number 
    const accNumber = getValueFromInput('bank-account-number');
    if (accNumber.length != 11) {
        alert("Invalid Bank Account Number");
        return;
    }

    // stp 3 get amount 

    const addMoneyAmount = getValueFromInput('add-money-amount');
    if (addMoneyAmount <= 0) {
        alert('Invalid Amount');
        return;
    }

    // stp 4 get the pin and validation
    const addMoneyPin = getValueFromInput('add-money-pin');

    if (addMoneyPin !== '2580') {
        alert('Invalid Pin');
        return;
    } else {
        alert('Add Money Success ');
        const currentBalance = getBalance();
        const balanceAfterAddMoney = currentBalance + Number(addMoneyAmount);
        setBalance(balanceAfterAddMoney);

    }

});