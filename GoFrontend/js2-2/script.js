var num = 5;
var arr = [];
var flag = false;

for (var i = 0; i < num; i++)
    arr[i] = prompt('Enter any name: ');

var user = prompt('Enter name of user: ');

for (i = 0; i < name.length; i++)
    if (arr[i] == user)
        flag = true;

if (flag)
    alert(user + ', you successfully logged');
else 
    alert('Error. No matches found');