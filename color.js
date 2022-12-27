let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let Color = document.querySelector('.Color');

  btn.addEventListener("click",function() {
   let randomNumber = getRandomNumber();
    // console.log(getRandomNumber);

   document.body.style.backgroundColor = colors[randomNumber];
   Color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}