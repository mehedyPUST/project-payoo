document.getElementById('pay-bill-btn').addEventListener('click', function () {
    // console.log('Add Money Button Clicked');
    // 1 bank name get 
    const payBillOption = getValueFromInput('pay-bill-option');
    // console.log(bankName);
    if (payBillOption == 'Select an Option') {
        alert("Please Select a Valid Option");
        return;
    }
    // step 2 get bank account number 
    const billerAccountNumber = getValueFromInput('biller-account-number');
    if (billerAccountNumber.length != 11) {
        alert("Invalid Biller Account Number");
        return;
    }

    // stp 3 get amount 

    const payBillAmount = getValueFromInput('pay-bill-amount');
    if (payBillAmount <= 0) {
        alert('Invalid Amount');
        return;
    }

    // stp 4 get the pin and validation
    const payBillPin = getValueFromInput('pay-bill-pin');

    if (payBillPin !== '2580') {
        alert('Invalid Pin');
        return;
    } else {

        const currentBalance = getBalance();
        const balanceAfterPayBill = currentBalance - Number(payBillAmount);
        if (balanceAfterPayBill < 0) {
            alert("Insufficient Fund");
            return;
        }
        alert('Bill Paid Successfully ');
        setBalance(balanceAfterPayBill);
    }


});