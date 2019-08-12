'use strict';

function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        const block = fibonacci(n-2) + fibonacci(n-1);
        console.log(`fibonacci(${n}) => ${block}`);
        return block;
    }
}

module.exports = fibonacci;