// 
function make(tag,obj) {
    var div = document.getElementsByTagName(tag);
    var keys = Object.keys(obj);


    for (var i = 0; i < div.length; i++) {

        for (var j = 0; j < keys.length; j++) {
            div[i].style[keys[j]] = obj[keys[j]];
        }
        console.log(div[i])
    }
}