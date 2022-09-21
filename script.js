function myfunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    alert("WOW it is beautiful")
}
function change() {
    document.getElementById("img1").src = "Suv.jpg";
}
function text() {
    document.getElementById("txt").style.fontSize = "40px"
}
function text_hide() {
    document.getElementById("txt-hide").style.display = "none";
}
function text_show() {
    document.getElementById("txt-hide").style.display = "block";

}
function text_change() {
    document.write("HAHAHAHA!");

}

function add() {
    let a = Number.parseInt(prompt("Enter Number A: "));
    let b = Number.parseInt(prompt("Enter Number A: "));
    document.getElementById("calc").innerHTML = a + b
}
function sub(){
    let a = Number.parseInt(prompt("Enter Number A: "));
    let b = Number.parseInt(prompt("Enter Number A: "));
    document.getElementById("calc").innerHTML = a - b   
}
function Alert(){
    window.alert("BAKA!");
}
function Print(){
    window.print()
}
function date(){
    document.getElementById("da").innerHTML = Date();
}
function slen(){
    let str = prompt("Enter String: ");
    let a = str.length;
    document.getElementById("len").innerHTML = "The Length of The String is: "+ a
}
function sort(){
    const a = [10,1,20,2]
    a.sort(function(a,b){return a-b});
    document.getElementById("sorting").innerHTML=a

}
function Array(){
    
    let a = []
    let s = parseInt(prompt("Enter Size of An Array: "));
    for(let i=0;i<s;i++){
        let ele = parseInt(prompt(`Enter Element ${i}: `))
        a.push(ele)
    }
    let b = a.join(",")
    document.getElementById("array").innerHTML= "ARRAY ELEMENTS ARE :" + b;
}