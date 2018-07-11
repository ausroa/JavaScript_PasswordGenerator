var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp = "";

function generatepass(plength) {
    tmp = "";
    for(var i = 0; i < plength; i++) {
        tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return tmp;
}

function populateform(enterlength) {
    document.passGen.output.value = generatepass(enterlength)
}









