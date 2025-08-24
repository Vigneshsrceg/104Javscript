//encapsulation for username and password
function UserAccount(username, password) {
let _username = username; // Private variable
let _password = password; // Private variable

function getUsername() {
    return _username;
}

function changeusername(newUsername) {
    _username = newUsername;
    console.log("Username changed successfully.");

}
function getPassword() {
    return _password;
}
function changepassword(newPassword) {
    _password = newPassword;
    console.log("Password changed successfully.");}

    return{
    getUsername: getUsername,
    changeusername: changeusername,
    getPassword: getPassword,
    changepassword: changepassword
    }


}
let myAccount = UserAccount("admin", "12345");
console.log('*******************Encapsulation example3***********************');
console.log(`Username: ${myAccount.getUsername()}`); // Accessing username
console.log(`Password: ${myAccount.getPassword()}`); // Accessing password
myAccount.changeusername("newAdmin"); // Changing username
myAccount.changepassword("67890"); // Changing password 
console.log(`Updated Username: ${myAccount.getUsername()}`); // Accessing updated username
console.log(`Updated Password: ${myAccount.getPassword()}`); // Accessing updated password
// Trying to access the private variables directly  
console.log(myAccount._username); // Output: undefined (cannot access private _username)
console.log(myAccount._password); // Output: undefined (cannot access private _password)  
