let totalHours = 31.5;
const medicare = 0.0145;
const socialSecurity = 0.062;
const federalIncomeTax = 0.04867725;
const rate = 15;
let totalPay = totalHours*rate;
console.log(totalPay);
let netPay = totalPay - (totalPay*medicare) - (totalPay*socialSecurity) - (totalPay*federalIncomeTax);
console.log(netPay);
