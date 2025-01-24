
// variables

const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')

let currentInput = "";
let Expression = "";


numbers.forEach(button => {
    button.addEventListener('click', function() {
        currentInput += button.textContent

        display.value = currentInput
    })
});

operator.forEach(button => {
    button.addEventListener('click', function() {
        if (currentInput) {
            Expression += currentInput + button.textContent;
            currentInput = "";

            display.value = Expression;
        }
    })
});

equals.addEventListener('click', function() {
    if (currentInput) {
        Expression += currentInput;
        
        try {
            const result = eval(Expression)

            display.value = result;
            Expression = "";
            currentInput = "";
            
        } catch (error) {
            console.log(`E ${error}`)
        }
    }
})

clear.addEventListener('click', function() {
    display.value = "";
    Expression = "";
    currentInput = "";
})