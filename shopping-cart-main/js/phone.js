
function updatePhoneNumber(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    // console.log('phone plus button')
    updatePhoneNumber();
   
})