document.getElementById('btn-cashout').addEventListener('click', function (event) {
    // ফর্ম সাবমিট প্রতিরোধ
    event.preventDefault();

    // সমস্ত ইনপুট একসাথে নেওয়া
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutPinInput = document.getElementById('cashout-pin');

    // ভ্যালুগুলো ট্রিম করা (অতিরিক্ত স্পেস বাদ দেওয়া)
    const cashOutNumber = cashOutNumberInput.value.trim();
    const cashOutAmount = cashOutAmountInput.value.trim();
    const cashOutPin = cashOutPinInput.value.trim();

    // ১. এজেন্ট নাম্বার ভ্যালিডেশন
    if (cashOutNumber.length !== 11) {
        showError('Invalid Agent Number (Must be 11 digits)', cashOutNumberInput);
        return;
    }

    // ২. অ্যামাউন্ট ভ্যালিডেশন (এম্পটি চেক সহ)
    if (cashOutAmount === '' || Number(cashOutAmount) <= 0) {
        showError('Please enter a valid positive amount', cashOutAmountInput);
        return;
    }

    // ৩. পিন ভ্যালিডেশন
    if (cashOutPin !== '2580') {
        showError('Invalid PIN', cashOutPinInput);
        return;
    }

    // ৪. ব্যালেন্স চেক
    const currentBalanceElement = document.getElementById('balance');
    const currentBalance = Number(currentBalanceElement.innerText);
    const withdrawAmount = Number(cashOutAmount);

    if (withdrawAmount > currentBalance) {
        showError('Insufficient Balance', cashOutAmountInput);
        return;
    }

    // ৫. সফল ট্রানজেকশন
    const newBalance = currentBalance - withdrawAmount;
    currentBalanceElement.innerText = newBalance;

    // সাকসেস মেসেজ
    showSuccess(`✅ Successfully withdrew $${withdrawAmount.toLocaleString()}`);

    // ইনপুট ফিল্ড ক্লিয়ার
    clearInputs([cashOutNumberInput, cashOutAmountInput, cashOutPinInput]);

    // ট্রানজেকশন লগ (ডেভেলপমেন্টের জন্য)
    console.log('Transaction successful:', {
        agent: cashOutNumber,
        amount: withdrawAmount,
        newBalance: newBalance,
        time: new Date().toLocaleString()
    });
});

// এরর দেখানোর ফাংশন
function showError(message, inputField) {
    // অ্যালার্ট দেখানো
    alert('❌ ' + message);

    // ইনপুট ফিল্ড হাইলাইট করা
    inputField.style.border = '2px solid #ef4444';
    inputField.style.backgroundColor = '#fef2f2';

    // ৩ সেকেন্ড পর হাইলাইট সরানো
    setTimeout(() => {
        inputField.style.border = '';
        inputField.style.backgroundColor = '';
    }, 3000);
}

// সাকসেস মেসেজ ফাংশন
function showSuccess(message) {
    alert(message);
}

// ইনপুট ক্লিয়ার ফাংশন
function clearInputs(inputs) {
    inputs.forEach(input => {
        input.value = '';
        input.style.border = ''; // এরর বর্ডার সরানো
        input.style.backgroundColor = '';
    });
}