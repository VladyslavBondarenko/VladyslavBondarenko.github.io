var num = 5;
var names = [];
var flag = false;

for (var i = 0; i < num; i++) {
    names[i] = prompt('Enter any name: ');
}
var user = prompt('Enter name of user: ');

for (i = 0; i < names.length; i++) {
    if (names[i] == user) {
        flag = true;
    }
}
if (flag) {
    alert(user + ', you successfully logged');
} else { 
    alert('Error. No matches found');
}