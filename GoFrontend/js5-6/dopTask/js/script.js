var btnStart = document.querySelector('.button_start');
var btnSplit = document.querySelector('.button_split');
var btnReset = document.querySelector('.button_reset');
var display = document.querySelector('.display');
var splits = document.querySelector('.splits');
var ms = 0, ss = 0, mm = 0, hh = 0;
var run = false;
var startTime, contTime = 0, splitNumber = 0;
var timer;
btnSplit.classList.add('button_unactive');

btnStart.addEventListener('click', start);
btnSplit.addEventListener('click', split);
btnReset.addEventListener('click', reset);

function start() {
    if (run) {
        contTime = contTime + Date.now() - startTime;
        clearInterval(timer);
        run = false;
        btnStart.innerHTML = "Start";
        btnStart.classList.remove('button_pause');
        btnSplit.classList.add('button_unactive');    
        addSplit();
    } else {
        startTime = Date.now();
        timer = setInterval(format,50);
        run = true;
        btnStart.innerHTML = "Stop";
        btnStart.classList.add('button_pause');
        btnSplit.classList.remove('button_unactive');
    }
}

function reset() {
    clearInterval(timer);
    display.innerHTML = '00:00:00.000';
    ms = ss = mm = hh = 0; 
    run = false;
    contTime = 0;
    btnStart.innerHTML = "Start";
    btnStart.classList.remove('button_stop');
    btnSplit.classList.add('button_unactive');
    splitNumber = 0;
    while (splits.lastChild)
        splits.removeChild(splits.lastChild);
}

function split() {
    if (run)
        addSplit();
}
function addZeroes(number, length) {
    var stringNum = String(number);
    while (stringNum.length < length)
        stringNum = '0' + stringNum;
    return stringNum;
}

function format() {
    ms = (Date.now() - startTime + contTime) % 1000;
    ss = (((Date.now() - startTime + contTime)/1000) % 60)>>0;
    mm = (((Date.now() - startTime + contTime)/60000) % 60)>>0;
    hh = ((Date.now() - startTime + contTime)/3600000)>>0;
    display.innerHTML =  [addZeroes(hh,2)+':'+addZeroes(mm,2)+':'+addZeroes(ss,2)+'.'+addZeroes(ms,3)];
}

function addSplit() {
    splitNumber++;
    splitString = document.createElement('p');
    splitString.innerHTML = ['Split '+splitNumber+': '+display.innerHTML];
    splits.appendChild(splitString);
}