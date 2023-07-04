//this the client interaction to maximize the user experience acurrency of the calculator

 let input1 = document.getElementById('first')
 let input2 = document.getElementById('second')
 let operator = document.getElementById('operator')
 let result = document.getElementById('screen')
 let myObject = {
        input1: "",
        input2: "", 
        operator: ""
    }
input1.addEventListener('input', function (event) {
    myObject.input1 = event.target.value;
   result.value = myObject.input1+" " +myObject.operator+" "+myObject.input2;
})
input2.addEventListener('input', function (event) {
    myObject.input2 = event.target.value;
    result.value = myObject.input1+" " +myObject.operator+" "+myObject.input2;;
})
operator.addEventListener('input', function (event) {
    myObject.operator = event.target.value;
    result.value = myObject.input1+" " +myObject.operator+" "+myObject.input2;;
})

 function calculate(event) {
    var input1 = parseFloat(document.getElementById('first').value);
    var input2 = parseFloat(document.getElementById('second').value);
    var operator = document.getElementById('operator').value;
    var result = '';
    
    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input1 / input2;
            break;
        case '%':
            result = input1 % input2;
            break;
        default:
            result = 'Invalid operator';
            event.preventDefault();
            break;
    }

    document.getElementById('screen').value = result;
}