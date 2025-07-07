function otpGenerator() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
console.log(otpGenerator()); // Example usage, prints a 6-digit OTP
