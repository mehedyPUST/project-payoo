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
        alert(`Add Money Success From ${bankName} . Account Number: ${accNumber} at ${new Date()}`);
        const currentBalance = getBalance();
        const balanceAfterAddMoney = currentBalance + Number(addMoneyAmount);
        setBalance(balanceAfterAddMoney);
        // 1. history container k dhorbo 
        const history = document.getElementById('history-container');

        // 2 new div create korbo 
        const newHistory = document.createElement('div');
        // 3 . new div er vitor inner html add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
         Add Money Success From ${bankName} . Account Number: ${accNumber} at ${new Date()}
        </div>
         
         `;
        // 4. hisotory container e new div append korvo 
        history.append(newHistory);

    }

});