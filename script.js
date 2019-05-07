'use strict';

let input = document.querySelector('.telephone'),
    string = '',
    numStr = '';

input.addEventListener('input', () => {
    // Вводим только цифры, пробел и +
    string = input.value;
    while ( /[^\d+]/.exec(string) ) {
        string = string.replace(/[^\d+]/, '');
        input.value = string;
    }
    // + может быть только на первой позиции
    if (/\+/.exec(string) != null) {
        if (/\+/.exec(string).index == 0) {
            string = string.replace(/\+/g, '');
            string = '+' + string;
            input.value = string;
        } else {
            string = string.replace(/\+/g, '');
            input.value = string;
        }
    }
    // строка в инпуте всегда показывает в начале +7
    // 8 заменяем на +7
    // перед любой другой цифрой ставим +7
    if (!/^(\+7)/.test(string)) {
        if (/^\+/.test(string) && string.length > 1) {
            string = string.replace(/\+/, '').replace(/\d/, '+7 $&');
            input.value = string;
        } else if (/^8/.test(string)) {
            string = string.replace(/^8/, '+7 ');
            input.value = string;
        } else {
            string = string.replace(/\d/, '+7 $&');
            input.value = string;
        }
    }
    // количество чисел в инпуте меньше или равно 11 и расставляем знаки красиво
    numStr = string.replace(/[^\d]/g, '');
    if (numStr.length > 11) {
        numStr = numStr.slice(0, 11);
    }
    // внешний вид в зависимости от длины
    if (numStr.length == 1) {
        string = '+7 ';
        input.value = string;
    }
    if (numStr.length > 1 && numStr.length <= 4) {
        string = numStr.replace(/(\d{1})(\d*)/, '+7 ($2)');
        input.value = string;
    }
    if (numStr.length > 4 && numStr.length <= 7) {
        string = numStr.replace(/(\d{1})(\d{3})(\d*)/, '+7 ($2) $3');
        input.value = string;
    }
    if (numStr.length > 7 && numStr.length <= 9) {
        string = numStr.replace(/(\d{1})(\d{3})(\d{3})(\d*)/, '+7 ($2) $3-$4');
        input.value = string;
    }
    if (numStr.length > 9 && numStr.length <= 11) {
        string = numStr.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d*)/, '+7 ($2) $3-$4-$5');
        input.value = string;
    }
});

input.addEventListener('keydown', (event) => {
    if (event.keyCode == 8) {
        event.preventDefault();
        string = input.value;
        numStr = string.replace(/[^\d]/g, '');
        numStr = numStr.slice(0, numStr.length - 1);
        
        if (numStr.length == 0) {
            string = string.slice(0, numStr.length - 1);
            input.value = string;
        }
        if (numStr.length == 1) {
            string = '+7';
            input.value = string;
        }
        if (numStr.length > 1 && numStr.length <= 4) {
            string = numStr.replace(/(\d{1})(\d*)/, '+7 ($2)');
            input.value = string;
        }
        if (numStr.length > 4 && numStr.length <= 7) {
            string = numStr.replace(/(\d{1})(\d{3})(\d*)/, '+7 ($2) $3');
            input.value = string;
        }
        if (numStr.length > 7 && numStr.length <= 9) {
            string = numStr.replace(/(\d{1})(\d{3})(\d{3})(\d*)/, '+7 ($2) $3-$4');
            input.value = string;
        }
        if (numStr.length > 9 && numStr.length <= 11) {
            string = numStr.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d*)/, '+7 ($2) $3-$4-$5');
            input.value = string;
        }
    }
});