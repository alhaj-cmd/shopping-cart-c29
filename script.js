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
}
document.getElementById('btn-case-plus').addEventListener('click', function(){
   updateCaseNumber();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
   updateCaseNumber();
})