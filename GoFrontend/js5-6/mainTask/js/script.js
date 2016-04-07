var btnStart = document.querySelector('.button_start');
var btnSplit = document.querySelector('.button_split');
var btnReset = document.querySelector('.button_reset');
var display = document.querySelector('.display');
var ms = 0, ss = 0, mm = 0, hh = 0;
var run = false;
var startTime, contTime = 0;
var timer;

btnStart.addEventListener('click', start);
btnReset.addEventListener('click', reset);
btnSplit.addEventListener('click', split);

function start() {
    if (run) {
        contTime = contTime + Date.now() - startTime;
        clearInterval(timer);
        run = false;
        btnStart.innerHTML = "Cont..";
        btnStart.classList.remove('button_pause');
    } else {
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

function format() {
    ms = (Date.now() - startTime + contTime) % 1000;
    ss = (((Date.now() - startTime + contTime)/1000) % 60)>>0;
    mm = (((Date.now() - startTime + contTime)/60000) % 60)>>0;
    hh = ((Date.now() - startTime + contTime)/3600000)>>0;
    return [addZeroes(hh,2)+':'+addZeroes(mm,2)+':'+addZeroes(ss,2)+'.'+addZeroes(ms,3)];
}

function reset() {
    clearInterval(timer);
    display.innerHTML = '00:00:00.000';
    ms = ss = mm = hh = 0; 
    run = false;
    contTime = 0;
    btnStart.innerHTML = "Start";
    btnStart.classList.remove('button_pause');
}

function split() {
    
}