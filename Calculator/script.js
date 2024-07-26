document.addEventListener('DOMContentLoaded', () => {
    const openCalculatorBtn = document.getElementById('openCalculator');
    const calculatorModal = document.getElementById('calculatorModal');
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));

    openCalculatorBtn.addEventListener('click', () => {
        calculatorModal.style.display = 'flex';
    });

    window.addEventListener('click', (e) => {
        if (e.target == calculatorModal) {
            calculatorModal.style.display = 'none';
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            handleInput(value);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
            handleInput(key);
        } else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace' || key === 'Escape') {
            handleInput('C');
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            display.innerText = '';
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            display.innerText += value;
        }
    }
});
