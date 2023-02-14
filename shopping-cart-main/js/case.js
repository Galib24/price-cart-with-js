


function updateCaseNumber(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
   
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else if ( previousCaseNumber <= 0) {
        alert("Negative Value is not allowed");
        return newCaseNumber;
      }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
}





// // add event listener to the case plus button
// document.getElementById('btn-cas-plus').addEventListener('click', function () {
//     // console.log('case button click')
//     //  get the value inside the case number field (input field)
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     // convert number to an integer
//     const previousCaseNumber = parseInt(caseNumberString);
//     // console.log(previousCaseNumber);
//     // calculate the new case number
//     const newCaseNumber = previousCaseNumber + 1;
//     // set the value to the case number field
//     caseNumberField.value = newCaseNumber;

// })

document.getElementById('btn-cas-plus').addEventListener('click', function () {
updateCaseNumber(true);
});


// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     // console.log('case minus added')

//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     // console.log(previousCaseNumber);

//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// })

document.getElementById('btn-case-minus').addEventListener('click', function () {
updateCaseNumber(false);
});