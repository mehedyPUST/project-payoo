document.getElementById('btn-login').addEventListener('click', function () {
    console.log('Login button clicked');

    // 1.  get the number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2.  get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    // 3.  match both
    if (contactNumber == '01735147974' && pin == '2580') {
        // 3.1 true :::> alert > home page 
        alert('Login Success');
        // window.location.replace("/home.html");
        window.location.assign("/home.html");

    } else {
        // 3.2 false ::: alert > return
        alert('Login Failed');
        return;
    }


})