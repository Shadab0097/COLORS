let hex = [ 0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , "A" , "B" , "C" , "D" , "E","F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click",function() {
    let hexcolor="#";
    for(i=0; i<6; i++) {
        hexcolor += hex[getRandomNumber()];
        }
        console.log(hexcolor);
        color.textContent = hexcolor;
        document.body.style.backgroundColor = hexcolor;
});
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}