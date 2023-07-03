function calculate() {
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
        default:
            result = 'Invalid operator';
            break;
    }

    document.getElementById('screen').value = result;
}