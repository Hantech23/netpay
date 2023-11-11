
const medicare = 0.0145;
const socialSecurity = 0.062;
const federalIncomeTax = 0.04867725;






//console.log("Total pay: " + totalPay);
//let netPay = totalPay - (totalPay*medicare) - (totalPay*socialSecurity) - (totalPay*federalIncomeTax);
//console.log("Net pay: " + netPay);

const totalTax = medicare + socialSecurity + federalIncomeTax;
13.1025

//const actualRate = rate - (.1265*rate);
//console.log(actualRate*totalHours + " actual rate calc")

//let hypothetical = 80*actualRate;
//console.log("Hypothetical: " + hypothetical)

document.getElementById("submit").onclick = function(event) {
    event.preventDefault()
    let rate = document.getElementById("rateInput").value;
    let totalHours = document.getElementById("totalHoursInput").value;
    let totalPay = totalHours*rate;
    let netPay = totalPay - (totalPay*medicare) - (totalPay*socialSecurity) - (totalPay*federalIncomeTax);
    console.log("Netpay: " + netPay)
    let resultOutput = document.createElement("p")
    resultOutput.textContent = "Netpay: " + netPay
    document.body.appendChild(resultOutput)
}