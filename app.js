const ball = document.querySelector('.ball');
const theme = document.querySelectorAll('.theme1');
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn-keys');
const equal_btn = document.querySelector('.btn-equal');
const reset_btn = document.querySelector('.btn-reset');
const del_btn = document.querySelector('.btn-del');


ball.addEventListener('click', changeTheme);
buttons.forEach(btn => btn.addEventListener('click', write_input));

equal_btn.addEventListener('click', calculate);
reset_btn.addEventListener('click', reset);
del_btn.addEventListener('click', remove);

function changeTheme() {
    if (ball.classList.contains('theme1')) {
        theme.forEach(element => element.classList.remove('theme1'));
        theme.forEach(element => element.classList.add('theme2'));
    }
    else if (ball.classList.contains('theme2')) {
        theme.forEach(element => element.classList.remove('theme2'));
        theme.forEach(element => element.classList.add('theme3'));
    }
    else {
        theme.forEach(element => element.classList.remove('theme3'));
        theme.forEach(element => element.classList.add('theme1'));
    }
}

function write_input(e) {
    let value = e.target.dataset.key;
    screen.value += value;
}
function calculate() {
    let result = eval(screen.value);
    if (!isFinite(result)) {
        result = 0;
      }
        screen.value = result;
}
function remove() {
    const newValue = screen.value.slice(0, -1);
    screen.value = newValue;
}
function reset() {
    screen.value = "";
}