var Debug_Mode = true; // change this to show debugging info

var log = console.log; // custom console.log method
var Assert = console.assert; // custom assert method
if (!Debug_Mode){
    Assert = log = function(){};
}