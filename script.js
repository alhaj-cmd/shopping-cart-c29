// console.log('hello');
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previescaseNumber = parseInt(caseNumberString);
    let newCaseNumber ;
    if(isIncrease  === true){
        newCaseNumber  = previescaseNumber + 1;
    }
    else{
        newCaseNumber  = previescaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber  = updateCaseNumber(true);
  const caseTotalPrice  = newCaseNumber*59;
  const caseTotalElement  = document.getElementById('case-total');
  caseTotalElement.innerText  = caseTotalPrice;
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(false);
  console.log(newCaseNumber);
})