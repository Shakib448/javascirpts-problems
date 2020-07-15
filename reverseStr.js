function reverseStr(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien Bhai brother.";

var forAlien = reverseStr(statement);
console.log(forAlien);