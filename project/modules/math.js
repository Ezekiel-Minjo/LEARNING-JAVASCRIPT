export function calculate(operation, a, b) {
    switch(operation) {
        case 'add': return a + b;
        case 'multiply': return a * b;
        case 'divide': return b !== 0 ? a / b : 'Cannot divide by zero';
        default: return 'Unknown operation';
    }
}

export const PI = 3.14159;