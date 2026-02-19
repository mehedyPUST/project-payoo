document.getElementById('btn-cashout').addEventListener('click', function (event) {
    // Prevent default button behavior
    event.preventDefault();

    // Get input elements
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutPinInput = document.getElementById('cashout-pin');

    // Get values and trim whitespace
    const cashOutNumber = cashOutNumberInput.value.trim();
    const cashOutAmount = cashOutAmountInput.value.trim();
    const cashOutPin = cashOutPinInput.value.trim();

    // Validation checks
    let isValid = true;

    // Validate agent number
    if (cashOutNumber.length !== 11) {
        alert('❌ Invalid Agent Number - Must be exactly 11 digits');
        cashOutNumberInput.classList.add('input-error');
        isValid = false;
    } else {
        cashOutNumberInput.classList.remove('input-error');
    }

    // Validate amount
    if (cashOutAmount === '' || Number(cashOutAmount) <= 0) {
        alert('❌ Invalid Amount - Please enter a positive amount');
        cashOutAmountInput.classList.add('input-error');
        isValid = false;
    } else {
        cashOutAmountInput.classList.remove('input-error');
    }

    // Validate PIN
    if (cashOutPin !== '2580') {
        alert('❌ Invalid PIN');
        cashOutPinInput.classList.add('input-error');
        isValid = false;
    } else {
        cashOutPinInput.classList.remove('input-error');
    }

    // If any validation failed, stop here
    if (!isValid) return;

    // Check sufficient balance
    const currentBalanceElement = document.getElementById('balance');
    const currentBalance = Number(currentBalanceElement.innerText);
    const cashOutAmountNum = Number(cashOutAmount);

    if (cashOutAmountNum > currentBalance) {
        alert('❌ Insufficient Funds');
        cashOutAmountInput.classList.add('input-error');
        return;
    }

    // Success - Process cashout
    alert('✅ Cash Out Successful!');
    const newBalance = currentBalance - cashOutAmountNum;
    currentBalanceElement.innerText = newBalance;

    // Clear input fields after successful transaction
    cashOutNumberInput.value = '';
    cashOutAmountInput.value = '';
    cashOutPinInput.value = '';

    // Remove any error classes
    cashOutNumberInput.classList.remove('input-error');
    cashOutAmountInput.classList.remove('input-error');
    cashOutPinInput.classList.remove('input-error');

    // Log transaction (optional - for debugging)
    console.log('Cashout Transaction:', {
        agentNumber: cashOutNumber,
        amount: cashOutAmountNum,
        newBalance: newBalance,
        timestamp: new Date().toLocaleString()
    });
});