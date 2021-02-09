function getParagraph1(){
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("input_"+i).value);
        inputs.join(". ");
        document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
    }
}
function getParagraph2(){
    var inputs0 = [];
    for(var k = 1; k <= 6; k++){
        inputs0.push(document.getElementById("input_0"+k).value);
        inputs0.join(". ");
        document.getElementById("showParagraph2").innerHTML = inputs0.join(". ")
    }
}