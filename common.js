function currentPhoneTotal(elementId){
    const phoneTotalElement  = document.getElementById(elementId);
    const currentPhoneTotalsring = phoneTotalElement.innerText;
    const currentPhoneTotal =parseInt(currentPhoneTotalsring);
    return currentPhoneTotal;
}

function setElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubTotal(){
    // calculate
    console.log('ami ani')
    const currentPhoneNumber =currentPhoneTotal('phone-total');
    const currentCaseNumber =currentPhoneTotal('case-total');
    const currentsubTotal = currentPhoneNumber + currentCaseNumber;
    setElementValueById('sub-total', currentsubTotal);
   

    const texAmountSring = (currentsubTotal * 0.1).toFixed(2);
    const texAmount =parseFloat(texAmountSring);

    setElementValueById('tax-amount', texAmount);
    const finalAmount = currentsubTotal + texAmount;
    setElementValueById('final-total', finalAmount);
}

console.log('ami nai')