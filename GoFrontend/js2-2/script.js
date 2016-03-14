var num = 5;
var name = [];
var flag = false;

for (var i = 0; i < num; i++)
    name[i] = prompt('Enter any name: ');

var user = prompt('Enter name of user: ');

for (i = 0; i < name.length; i++)
    if (name[i] == user)
        flag = true;

if (flag)
    alert(user + ', you successfully logged');
else 
    alert('Error. No matches found');

    