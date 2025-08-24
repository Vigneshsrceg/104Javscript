// Encapsulation in JavaScript 
// Encapsulation is a fundamental concept in object-oriented programming that restricts direct access to some of an object's components and can prevent the accidental modification of data. In JavaScript, encapsulation can be achieved using closures, which allow you to create private variables and methods within a function scope.
function homeaccount(){
    let balance = 0; // Private variable, not accessible from outside

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Invalid withdrawal amount");
        }
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    };
}

let myAccount = homeaccount();
console.log('*******************Encapsulation example***********************');
myAccount.deposit(100);    // Deposited: $100
myAccount.withdraw(30);    // Withdrew: $30
console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance:


function SecretBox(secret) {
    let _secret = secret;  // Private variable, hidden inside

    function revealSecret() {
        console.log(`The reveal secret is: ${_secret}`);
    }

    function changeSecret(newSecret) {
        _secret = newSecret;
        console.log("Secret changed successfully.");
    }

    return {
        reveal: revealSecret,
        change: changeSecret
    };
}

let myBox = SecretBox("I love chocolate");
console.log('*******************Encapsulation example2***********************');

myBox.reveal();       // Output: The secret is: I love chocolate
myBox.change("I love ice cream");
myBox.reveal();       // Output: The secret is: I love ice cream

// Trying to access the secret directly
console.log(myBox._secret); // Output: undefined (cannot access private _secret)

function TVRemote() {
    let _volume = 1;  // Private volume level

    function increaseVolume() {
        if (_volume < 20) {
            _volume++;
            console.log(`Volume increase : ${_volume}`);
        } else {
            console.log("Volume is at maximum");
        }
    }

    function decreaseVolume() {
        if (_volume > 0) {
            _volume--;
            console.log(`Volume decrease by : ${_volume}`);
        } else {
            console.log("Volume is at minimum");
        }
    }

    return {
        volumeUp: increaseVolume,
        volumeDown: decreaseVolume
    };
}

let myRemote = TVRemote();
console.log('*******************Encapsulation example3***********************');

myRemote.volumeUp();   // Volume: 11
myRemote.volumeUp();   // Volume: 12
myRemote.volumeDown(); // Volume: 11

console.log(myRemote._volume);