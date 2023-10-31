let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keypress', (e) => {
    const key = e.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '(' || key === ')') {
        handleButtonClick(key);
    } else if (key === 'Enter') {
        e.preventDefault(); // Prevent the default behavior (form submission)
        handleButtonClick('=');
    } else if (key === 'Backspace') {
        e.preventDefault(); // Prevent the default behavior (going back in browser history)
        handleButtonClick('DEL');
    }
});

function handleButtonClick(buttonText) {
    if (buttonText === '=') {
        string = eval(string);
        input.value = string;
    } else if (buttonText === 'AC') {
        string = "";
        input.value = string;
    } else if (buttonText === 'DEL') {
        if (string.length > 0) {
            const lastChar = string.charAt(string.length - 1);
            if (isNaN(lastChar) && lastChar !== '.') {
                // Remove operators and decimal point at once
                string = string.slice(0, -1);
            } else {
                // Remove digits one by one
                string = string.slice(0, -1);
            }
            input.value = string;
        }
    } else {
        string += buttonText;
        input.value = string;
    }
}
