function funkcja() {

    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");
    const canvas1 = document.getElementById("c1");
    const ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(0, 5);
    ctx1.lineTo(5, 0);
    ctx1.lineTo(10, 5);
    ctx1.lineTo(10, 35);
    ctx1.lineTo(5, 40);
    ctx1.lineTo(0, 35);
    ctx1.closePath();
    ctx1.fillStyle = "#31C8F3";
    ctx1.fill();

    const canvas2 = document.getElementById("c2");
    const ctx2 = canvas2.getContext("2d");
    ctx2.beginPath();
    ctx2.moveTo(0, 5);
    ctx2.lineTo(5, 0);
    ctx2.lineTo(10, 5);
    ctx2.lineTo(10, 35);
    ctx2.lineTo(5, 40);
    ctx2.lineTo(0, 35);
    ctx2.closePath();
    ctx2.fillStyle = "#203030";
    ctx2.fill();

    const canvas3 = document.getElementById("c3");
    const ctx3 = canvas3.getContext("2d");
    ctx3.beginPath();
    ctx3.moveTo(5, 0);
    ctx3.lineTo(25, 0);
    ctx3.lineTo(30, 5);
    ctx3.lineTo(25, 10);
    ctx3.lineTo(5, 10);
    ctx3.lineTo(0, 5);

    ctx3.closePath();
    ctx3.fillStyle = "#203030";
    ctx3.fill();

    const canvas4 = document.getElementById("c4");
    const ctx4 = canvas4.getContext("2d");
    ctx4.beginPath();
    ctx4.moveTo(5, 0);
    ctx4.lineTo(25, 0);
    ctx4.lineTo(30, 5);
    ctx4.lineTo(25, 10);
    ctx4.lineTo(5, 10);
    ctx4.lineTo(0, 5);
    ctx4.closePath();
    ctx4.fillStyle = "#31C8F3";
    ctx4.fill();

    var date = new Date();
    var hou = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    hou = (hou<10)?0+hou:hou;
    min = (min<10)?0+min:min;
    sec = (sec<10)?0+sec:sec;

    var n1 = hou.slice(0,1);
    var n2 = hou.slice(1,2);
    var n3 = min.slice(0,1);
    var n4 = min.slice(1,2);
    var n5 = sec.slice(0,1);
    var n6 = sec.slice(1,2);

    if (sec % 2) {
        dotsOff();
    } else {
        dotsOn();
    }

    renderSymbol(n1,canvas1,canvas2,canvas3,canvas4);
    renderSymbol(n2,canvas1,canvas2,canvas3,canvas4,68);
    renderSymbol(n3,canvas1,canvas2,canvas3,canvas4,150);
    renderSymbol(n4,canvas1,canvas2,canvas3,canvas4,200);
    renderSymbol(n5,canvas1,canvas2,canvas3,canvas4,278);
    renderSymbol(n6,canvas1,canvas2,canvas3,canvas4,328);
}

function dotsOn() {
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");
    const canvas5 = document.getElementById("c5");
    const ctx5 = canvas5.getContext("2d");
    ctx5.beginPath();
    ctx5.fillStyle = "#31C8F3";
    ctx5.arc(5, 5, 5, 0, 2 * Math.PI);
    ctx5.closePath();
    ctx5.fill();
    // ctx5.fillRect(0, 0, canvas5.width, canvas5.height);
    ctx.drawImage(canvas5, 120, 30);
    ctx.drawImage(canvas5, 120, 60);
    ctx.drawImage(canvas5, 250, 30);
    ctx.drawImage(canvas5, 250, 60);
}
function dotsOff() {
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");
    const canvas6 = document.getElementById("c5");
    const ctx6 = canvas6.getContext("2d");
    ctx6.beginPath();
    ctx6.fillStyle = "#203030";
    ctx6.arc(5, 5, 5, 0, 2 * Math.PI);
    ctx6.closePath();   
    ctx6.fill();
    // ctx6.fillRect(0, 0, canvas6.width, canvas6.height);
    ctx.drawImage(canvas6, 120, 30);
    ctx.drawImage(canvas6, 120, 60);
    ctx.drawImage(canvas6, 250, 30);
    ctx.drawImage(canvas6, 250, 60);
}

function renderSymbol(number,canv1,canv2,canv3,canv4,x=18,y=4) {
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");
    switch (number) {
    case '0' : 

    //horizontal
        ctx.drawImage(canv4,x,y);
        ctx.drawImage(canv3,x,y+41);
        ctx.drawImage(canv4,x,y+82);

    //vertical
        ctx.drawImage(canv1,x-7,y+6);
        ctx.drawImage(canv1,x-7,y+46);
        ctx.drawImage(canv1,x+28,y+6);
        ctx.drawImage(canv1,x+28,y+46);
        
    break;
    case '1' : 
    //horizontal
    ctx.drawImage(canv3,x,y);
    ctx.drawImage(canv3,x,y+41);
    ctx.drawImage(canv3,x,y+82);

    //vertical
    ctx.drawImage(canv2,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);
    break;

    case '2' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv2,x-7,y+6);
    ctx.drawImage(canv1,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv2,x+28,y+46);

    break;

    case '3' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv2,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '4' : 
    //horizontal
    ctx.drawImage(canv3,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv3,x,y+82);

    //vertical
    ctx.drawImage(canv1,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '5' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv1,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv2,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '6' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv1,x-7,y+6);
    ctx.drawImage(canv1,x-7,y+46);
    ctx.drawImage(canv2,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '7' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv3,x,y+41);
    ctx.drawImage(canv3,x,y+82);

    //vertical
    ctx.drawImage(canv2,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '8' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv1,x-7,y+6);
    ctx.drawImage(canv1,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    case '9' : 
    //horizontal
    ctx.drawImage(canv4,x,y);
    ctx.drawImage(canv4,x,y+41);
    ctx.drawImage(canv4,x,y+82);

    //vertical
    ctx.drawImage(canv1,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);

    break;

    default : 
    ctx.drawImage(canv3,x,y);
    ctx.drawImage(canv3,x,y+41);
    ctx.drawImage(canv3,x,y+82);

    //vertical
    ctx.drawImage(canv2,x-7,y+6);
    ctx.drawImage(canv2,x-7,y+46);
    ctx.drawImage(canv1,x+28,y+6);
    ctx.drawImage(canv1,x+28,y+46);
    break;
}
}

document.addEventListener("DOMContentLoaded", funkcja);

setInterval(funkcja,200);