let button = document.querySelector('#button');
let div = document.querySelector('div');
let counter = 0;
button.addEventListener('click', function () {
    if (counter === 0) {
        div.style.backgroundColor = 'yellow';
        button.style.backgroundColor = 'red';
        button.innerText = 'Switch OFF bulb!';
        counter =1;
    } else if (counter === 1) {
        div.style.backgroundColor = 'transparent';
        button.style.backgroundColor = 'green';
        button.innerText = 'Switch ON bulb!';
        counter =0;
    }
});




