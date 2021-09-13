var table = document.getElementById('table');
const next = document.getElementById('next');
const callednum = document.getElementById('called-number');

let drawnNumbers = [] // Array to hold drawn numbers

function getNumber() {
    let b = false;

    while (!b) {
        let randomNumber = Math.floor(Math.random() * 76);
        if (!drawnNumbers.includes(randomNumber)) {
            return randomNumber;
        }
        if (drawnNumbers.length > 75) {
            return;
        }
    }
}

next.addEventListener('click', () => {
    
    let num = getNumber();
    drawnNumbers.push(num);
    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            if (col.innerText === num.toString()) {
                col.classList.add('visible');
            }
        }
    }
    if (num >= 1 && num <= 15) {
        callednum.innerText = "B " + num.toString();
    }

    if (num >= 16 && num <= 30) {
        callednum.innerText = "I " + num.toString();
    }

    if (num >= 31 && num <= 45) {
        callednum.innerText = "N " + num.toString();
    }

    if (num >= 46 && num <= 60) {
        callednum.innerText = "G " + num.toString();
    }

    if (num >= 61 && num <= 75) {
        callednum.innerText = "O " + num.toString();
    }
});

