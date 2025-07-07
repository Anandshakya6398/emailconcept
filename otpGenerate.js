function otpGenerator() {
    return Math.floor((Math.random() * 10000) + 90000);
}
console.log(otpGenerator()); // Example usage, prints a 6-digit OTP
