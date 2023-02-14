


function updateCaseNumber(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;

    }
    else if (previousCaseNumber <= 0) {
        alert("Negative Value is not allowed");
        return  previousCaseNumber;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
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


// document.getElementById('btn-cas-plus').addEventListener('click', function () {
//     const newCaseNumber =  updateCaseNumber(true);
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
//     });


function updateCaseTotalPrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-cas-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

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
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});