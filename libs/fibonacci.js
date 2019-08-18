'use strict';

function fibonacci(n) {
    let a = 1, b = 0, temp;

    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }

    return b;
}

module.exports = fibonacci;