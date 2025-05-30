let button = document.querySelector('#button');
let div = document.querySelector('div');
let counter = 0;
button.addEventListener('click', function () {
    if (counter === 0) {
        div.style.backgroundColor = 'yellow';
        button.style.backgroundColor = 'rgb(252, 71, 0)';
        button.innerHTML = '<strong>Switch OFF bulb!</strong>';
        counter =1;
    } else if (counter === 1) {
        div.style.backgroundColor = 'transparent';
        button.style.backgroundColor = 'lawngreen';
        button.innerHTML = '<strong>Switch ON bulb!</strong>';
        counter =0;
    }
});



