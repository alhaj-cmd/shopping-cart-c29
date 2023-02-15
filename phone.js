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