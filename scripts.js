// INPUTS
const daysInpt = document.getElementById('input__days');
const monthsInpt = document.getElementById('input__months');
const yearsInpt = document.getElementById('input__years')

// OUTPUTS'

const outDays = document.getElementById('days');
const outMonths = document.getElementById('months');
const outYears = document.getElementById('years');

// FORM

const form = document.getElementById('form');

// BUTTON'

const button = document.getElementById('button');




const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll('input');
  
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        const labels = parent.querySelector('label');
        if (!i.value) {
            labels.style.color = 'red'
            i.style.outlineColor = 'red';
            parent.querySelector('small').innerText = 'this file is required';
            validator = false;
        } else if (monthsInpt.value > 12) {
            monthsInpt.style.outlineColor = 'red';
            monthsInpt.parentElement.querySelector('small').innerText = 'must be a valid month';
            validator = false;
        } else if (daysInpt.value > 31) {
            daysInpt.style.outlineColor = 'red';
            daysInpt.parentElement.querySelector('small').innerText = 'must be a valid day  ';
            validator = false;
        }else if (yearsInpt.value > year){
            yearsInpt.parentElement.querySelector('small').innerText =
            'must be a valid year';
            validator = false;
        } else {
            labels.style.color = 'black';
            i.style.outlineColor = 'black';
            parent.querySelector('small').innerText = '';
            validator = true;
        }

    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
        if (daysInpt.value > day ) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthsInpt.value > month) {
            month = month + 12; 
            year = year - 1;
        }

        let d = day - parseInt(daysInpt.value);
        let m = month - parseInt(monthsInpt.value);
        let y = year - parseInt(yearsInpt.value);

        outDays.innerText = d;
        outMonths.innerText = m;
        outYears.innerText = y;
    }

};

button.addEventListener('click', handleSubmit);