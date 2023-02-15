// console.log('hello')
// console.log('hello');
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previesPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber ;
    if(isIncrease  === true){
        newPhoneNumber  = previesPhoneNumber + 1;
    }
    else{
        newPhoneNumber  = previesPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhoneNumberTotal(newPhoneNumber){
    const phoneTotalPrice  = newPhoneNumber*1219;
    const phoneTotalElement  = document.getElementById('phone-total');
    phoneTotalElement.innerText  = phoneTotalPrice;

}

function currentPhoneTotal(elementId){
    const phoneTotalElement  = document.getElementById(elementId);
    const currentPhoneTotalsring = phoneTotalElement.innerText;
    const currentPhoneTotal =parseInt(currentPhoneTotalsring);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    // calculate
    const currentPhoneNumber =currentPhoneTotal('phone-total');
    const currentCaseNumber =currentPhoneTotal('case-total');
    const currentsubTotal = currentPhoneNumber + currentCaseNumber;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentsubTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const newPhoneNumber  = updatePhoneNumber(true);
  updatePhoneNumberTotal(newPhoneNumber)

//    calculate 
calculateSubTotal()


})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(false);
//   console.log(newCaseNumber);
updatePhoneNumberTotal(newPhoneNumber)
// calculate
calculateSubTotal()

})