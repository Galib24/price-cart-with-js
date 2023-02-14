document.getElementById('btn-cas-plus').addEventListener('click', function(){
    // console.log('case button click')

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    console.log(previousCaseNumber);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

})