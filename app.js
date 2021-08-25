function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
};
function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
};
//hande typed numbers
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
       if(number == 'C'){
        calcInput.value = '';
       }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin(){
   const generatePin =  document.getElementById('display-pin').value;
   const typedNumbers = document.getElementById('typed-numbers').value;
   const successMessage = document.getElementById('verify-success');
   const errorMessage = document.getElementById('verify-fail');
   if(generatePin == typedNumbers){
       errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
   }
   else{
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
   }
}

