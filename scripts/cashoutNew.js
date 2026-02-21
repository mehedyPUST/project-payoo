
document.getElementById('btn-cashout').addEventListener('click', function () {
    // 1 get the agent number and validate 

    const cashOutNumber = getValueFromInput('cashout-number');
    if (cashOutNumber.length != 11) {
        alert("Invalid Agent Number");
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

    const currentBalance = getBalance();
    console.log(balance);

    // 4 calculate balance 
    const newBalance = currentBalance - Number(cashOutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    //5 pin 
    const pin = getValueFromInput('cashout-pin');
    console.log(pin);
    if (pin !== '2580') {
        // 5-1 ::true show an alert >> set balance
        alert('Invalid Pin');
        return;


    }
    else {
        // 5-2  ::false show anerror alert > return
        alert(`Cash Out Success TK: ${cashOutAmount} to  ${cashOutNumber} at ${new Date()}`);
        console.log('New Balance:', newBalance);
        setBalance(newBalance);
        // 1. history container k dhorbo 
        const history = document.getElementById('history-container');

        // 2 new div create korbo 
        const newHistory = document.createElement('div');
        // 3 . new div er vitor inner html add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
         Cash Out Success TK: ${cashOutAmount} to  ${cashOutNumber} at ${new Date()}
        </div>
         
         `;
        // 4. hisotory container e new div append korvo 
        history.append(newHistory);
    }



});




