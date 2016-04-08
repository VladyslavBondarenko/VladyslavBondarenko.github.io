var btnStart = document.querySelector('.button_start');
var btnClear = document.querySelector('.button_clear');
var display = document.querySelector('.display');
var displayMs = document.querySelector('.display_ms');
var ms = 0, ss = 0, mm = 0, hh = 0;
var run = false;
var startTime, contTime = 0;
var timer;

btnStart.addEventListener('click', start);
btnClear.addEventListener('click', clear);

function start() {
    if (run) {
        contTime = contTime + Date.now() - startTime;
        clearInterval(timer);
        run = false;
        btnStart.innerHTML = "Cont..";
        btnStart.classList.remove('button_pause');
    } else {
        btnStart.innerHTML = "Cont..";
        startTime = Date.now();
        timer = setInterval(timerHandler,54);
        run = true;
        btnStart.innerHTML = "Pause";
        btnStart.classList.add('button_pause');
    }
}

function timerHandler() {
    display.innerHTML = format();
    displayMs.innerHTML = formatMs();
}

function addZeroes(number, length) {
    var stringNum = String(number);
    while (stringNum.length < length)
        stringNum = '0' + stringNum;
    return stringNum;
}

function formatMs() {
    ms = (Date.now() - startTime + contTime) % 1000;
    return addZeroes(ms,3);
}

function format() {
    ss = (((Date.now() - startTime + contTime)/1000) % 60)>>0;
    mm = (((Date.now() - startTime + contTime)/60000) % 60)>>0;
    hh = ((Date.now() - startTime + contTime)/3600000)>>0;
    return [addZeroes(hh,2)+':'+addZeroes(mm,2)+':'+addZeroes(ss,2)];
}

function clear() {
    clearInterval(timer);
    display.innerHTML = '00:00:00';
    displayMs.innerHTML = '000';
    ms = ss = mm = hh = 0; 
    run = false;
    contTime = 0;
    btnStart.innerHTML = "Start";
    btnStart.classList.remove('button_pause');
}