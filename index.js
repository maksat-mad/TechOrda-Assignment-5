const res = document.getElementById("result");
const errOpers = document.getElementById('valid-num');
const errDot = document.getElementById('valid-dot');
const errExpr = document.getElementById('valid-expr');
res.innerHTML = '0';
const opers = ['/', '*', '-', '+'];

function insert(enteredValue) {
    switch (enteredValue) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.': case '(': case ')':
            begin();
            if (res.innerHTML.length === 1 && res.innerHTML === '0') {
                if (enteredValue === '.') {
                    res.innerHTML = '0' + enteredValue;
                } else {
                    res.innerHTML = enteredValue;
                }
            } else if (res.innerHTML[res.innerHTML.length - 1] === '.' && enteredValue === '.') {
                errDot.style.display = 'block';
            } else {
                if (opers.includes(res.innerHTML[res.innerHTML.length - 1]) && enteredValue === '.') {
                    res.innerHTML += '0';
                }
                res.innerHTML += enteredValue;
            }
            validCheck();
            break;
        case '/': case '*': case '-': case '+':
            errDot.style.display = 'none';
            if (opers.includes(res.innerHTML[res.innerHTML.length - 1])) {
                errOpers.style.display = 'block';
            } else {
                if (res.innerHTML[res.innerHTML.length - 1] === '.') {
                    res.innerHTML += '0';
                }
                res.innerHTML += enteredValue;
            }
            break;
        case 'del':
            begin();
            if (res.innerHTML.length === 1) {
                res.innerHTML = '0';
            } else {
                res.innerHTML = res.innerHTML.slice(0, res.innerHTML.length - 1);
            }
            validCheck();
            break;
        case 'cls':
            begin();
            res.innerHTML = '0';
            validCheck();
    }
}

function begin() {
    errOpers.style.display = 'none';
    errDot.style.display = 'none';
}

function validCheck() {
    if (valid()) {
        errExpr.style.display = 'none';
    } else {
        errExpr.style.display = 'block';
    }
}

function valid() {
    try {
        eval(res.innerHTML);
        return true;
    } catch(ex) {
        return false;
    }
}

function calculate() {
    if (valid()) {
        res.innerHTML = eval(res.innerHTML);
    }
}