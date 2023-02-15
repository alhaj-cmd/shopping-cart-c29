// console.log('hello');
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previescaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previescaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})