let string = prompt('Nhap ki tu can kiem tra');

function checkPalindrome(text) {
    let arrayText = text.split('');
    let length = arrayText.length;
    let count = 0;
    for (i = 0; i <= Math.trunc(length / 2) - 1; i++) {
        if (arrayText[i] == arrayText[length - 1 - i]) {
            count++;
        }
    }
    if (count == Math.trunc(length / 2)) {
        document.write(text + ' la ki tu doi xung');
    } else {
        document.write(text + ' khong phai la ki tu doi xung');
    }

}
checkPalindrome(string);


