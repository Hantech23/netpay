let totalHours = 41;
const medicare = 0.0145;
const socialSecurity = 0.062;
const federalIncomeTax = 0.04867725;
const rate = 15;
let totalPay = totalHours*rate;
console.log(totalPay);
let netPay = totalPay - (totalPay*medicare) - (totalPay*socialSecurity) - (totalPay*federalIncomeTax);
console.log(netPay);

const totalTax = medicare + socialSecurity + federalIncomeTax;
13.1025

const actualRate = rate - (.1265*rate);
console.log(actualRate*totalHours + " actual rate calc")

let hypothetical = 60*actualRate;
console.log(hypothetical)