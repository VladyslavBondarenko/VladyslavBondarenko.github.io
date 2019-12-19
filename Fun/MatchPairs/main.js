(function(){
    var codes = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'], i, j, x, y, htmlTable = '';
    for(y = codes.length; y;){
        j = Math.floor(Math.random() * y);
        x = codes[--y];
        codes[y] = codes[j];
        codes[j] = x;
    }
    j = 0;
    for(var k = 0; k < 4; k++) {
        htmlTable += '<tr>';
        for (var l = 0; l < 3; l++) {
            htmlTable += '<td class="hidden">' + codes[j] + '</td>';
            j++;
        }
        htmlTable += '</tr>';
    }
    
    document.getElementById('pole').innerHTML = htmlTable;
    var check = false, selLetter = 0, sela, steps = 0, open = 0, timer,td = document.getElementsByTagName('td');
    for(var i = 0; i < td.length; i++){
        td[i].addEventListener('click', function(e){
            var el = e.target;
            if(el.className.indexOf('hidden') > -1){
                steps++;
                el.className = el.className.replace('hidden', '');
                setTimeout(function(){
                    if(check){
                        check = false;
                        if(el.innerHTML == selLetter){
                            open++;
                            if(open == 6) alert('You win! Steps: ' + steps);
                        }
                        else{
                            sela.className += ' hidden'; el.className += ' hidden';
                        }
                    }
                    else{
                        selLetter = el.innerHTML; sela = el; check = true;
                    }
                }, 100);
            }
        });
    }
})();