const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const increaseBtn1 = document.querySelector('.increaseBtn');
const decreaseBtn1 = document.querySelector('.decreaseBtn');
const dataDefault1 = document.querySelector('.dataDefault');
const name = document.querySelector('.name');
const inputData = document.querySelector('.inputData');
const getDataBtn = document.querySelector('.getDataBtn');
const showData = document.querySelector('.showData');
const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.quoteBtn');
const colorsRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colors = ['yellow', 'red', 'green', '#3b5998'];
const quotes = [
    {
        name: 'A',
        quote: 'AAA'
    },
    {
        name: 'B',
        quote: 'BBB'
    },
    {
        name: 'C',
        quote: 'CCC'
    },
    {
        name: 'D',
        quote: 'DDD'
    },
    {
        name: 'E',
        quote: 'EEE'
    }
]

colorBtn.addEventListener('click', changeColor);
function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
hexBtn.addEventListener('click', randomColor);
function randomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colorsRandom.length);
        color += colorsRandom[random];
    }
    bodyBcg.style.backgroundColor = color;
    hex.innerHTML = color;
}
quoteBtn.addEventListener('click', randomString);
function randomString() {
    let random = Math.floor(Math.random() * quotes.length);
    name.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
}
getDataBtn.addEventListener('click', getData);
function getData() {
    let data = inputData.value;
    if (data === '') {
        alert("data null");
    }
    else {
        showData.innerHTML = data;
        inputData.value = '';
    }
}
let count = 0;
increaseBtn1.addEventListener('click', increaseBtn2);
function increaseBtn2() {
    count += 1;
    console.log(count);
    if (count >= 0) {
        dataDefault1.style.color = "blue";
        dataDefault1.innerHTML = count;
    }
    else {
        count = 0;
        dataDefault1.innerHTML = count;
    }
    dataDefault1.animate([{ opacity: '0.2' }, { opacity: '1.0' }],
        { duration: 500, fill: 'forwards' });
}
decreaseBtn1.addEventListener('click', decreaseBtn2);
function decreaseBtn2() {
    count -= 1;
    console.log(count);
    if (count >= 0) {
        dataDefault1.style.color = "red";
        dataDefault1.innerHTML = count;
    }
    else {
        count = 0;
        dataDefault1.innerHTML = count;
    }
    dataDefault1.animate([{ opacity: '0.2' }, { opacity: '1.0' }],
        { duration: 500, fill: 'forwards' });
}
document.querySelectorAll('.annouceBtn').forEach((item) => {
    item.addEventListener('click', () => {
        alert("Đã Click");
    });
})