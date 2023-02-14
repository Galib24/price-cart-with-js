
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;

    }
    else if (previousPhoneNumber <= 0) {
        alert("Negative Value is not allowed");
        return  previousPhoneNumber;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
     const phoneTotalElement = document.getElementById('phone-total');
     phoneTotalElement.innerText = phoneTotalPrice;
}

// calculation total 


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber =   updatePhoneNumber(true);
    // console.log('phone plus button')
    updateTotalPrice(newPhoneNumber);

    // calculate total
    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');
    // const currentSubTotal = currentCaseTotal * currentPhoneTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber =    updatePhoneNumber(false);
    updateTotalPrice(newPhoneNumber);
    calculateSubTotal();
})