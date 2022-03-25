// Memakai code yang telah pernah dibuat di challenge chapter 2
function isValidEmail(email) {
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regEmail.test(email) && email.includes("@");
}
function isValidPassword(givenPassword) {
    return givenPassword.length >= 6;
}
module.exports = {
    isValidEmail,
    isValidPassword
};