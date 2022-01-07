// Defining the conversion rate
const conversionTable = {
  'USD': 0.24,
  'YEN': 26.76,
  'INR': 17.89
};
let RMValue, conversionRate = 0.24;

// Handling the value entered by the user
function getValue(value){
  RMValue = value;
}

// Handling the picklist
function getCurrency(value){
  conversionRate = conversionTable[value];
}

// Handling when the submit button is clicked
function onSubmit(){
  if(RMValue && conversionRate){
    const conversionValue = RMValue * conversionRate;
    const element = document.getElementById('final-value');
    element.innerHTML = conversionValue;
  }
}