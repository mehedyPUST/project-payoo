document.getElementById('btn-cashout').addEventListener('click', function (event) {
    // ফর্ম সাবমিট প্রতিরোধ
    event.preventDefault();

    try {
        // ইনপুট নেওয়া
        const cashOutNumberInput = document.getElementById('cashout-number');
        const cashOutAmountInput = document.getElementById('cashout-amount');
        const cashOutPinInput = document.getElementById('cashout-pin');

        // ভ্যালু নেওয়া এবং ট্রিম করা
        let cashOutNumber = cashOutNumberInput.value.trim();
        let cashOutAmount = cashOutAmountInput.value.trim();
        let cashOutPin = cashOutPinInput.value.trim();

        // 1️⃣ এজেন্ট নাম্বার ভ্যালিডেশন
        if (!/^\d{11}$/.test(cashOutNumber)) {
            alert('❌ Invalid Agent Number (Must be exactly 11 digits)');
            cashOutNumberInput.focus();
            return;
        }

        // 2️⃣ অ্যামাউন্ট ভ্যালিডেশন
        if (cashOutAmount === '') {
            alert('❌ Please enter an amount');
            cashOutAmountInput.focus();
            return;
        }

        // চেক করা যে এটি একটি বৈধ নাম্বার কিনা
        const amountNum = Number(cashOutAmount);
        if (isNaN(amountNum) || amountNum <= 0) {
            alert('❌ Please enter a valid positive amount');
            cashOutAmountInput.focus();
            return;
        }

        // 3️⃣ পিন ভ্যালিডেশন
        if (!/^\d{4}$/.test(cashOutPin)) {
            alert('❌ Invalid PIN (Must be exactly 4 digits)');
            cashOutPinInput.focus();
            return;
        }

        if (cashOutPin !== '2580') {
            alert('❌ Wrong PIN');
            cashOutPinInput.focus();
            return;
        }

        // 4️⃣ ব্যালেন্স চেক
        const currentBalanceElement = document.getElementById('balance');
        const currentBalance = Number(currentBalanceElement.innerText.replace(/,/g, ''));

        if (amountNum > currentBalance) {
            alert('❌ Insufficient Balance');
            cashOutAmountInput.focus();
            return;
        }

        // 5️⃣ সফল ট্রানজেকশন
        const newBalance = currentBalance - amountNum;
        currentBalanceElement.innerText = newBalance.toLocaleString('en-US');

        alert('✅ Cash Out Successful!');

        // 6️⃣ ইনপুট ক্লিয়ার
        cashOutNumberInput.value = '';
        cashOutAmountInput.value = '';
        cashOutPinInput.value = '';

        console.log('Transaction successful:', {
            agent: cashOutNumber,
            amount: amountNum,
            newBalance: newBalance,
            time: new Date().toLocaleString()
        });

    } catch (error) {
        console.error('Transaction error:', error);
        alert('❌ Something went wrong. Please try again.');
    }
});