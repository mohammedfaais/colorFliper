var btn = document.querySelector(".btn");
var color = document.querySelector(".color");
var ColorFliperContainer = document.querySelector(".color-fliper-container");

// var backgroundClr = [{
//     color:"red",
//     hexCode: "#FF0000",
// },
// {
//     color:"blue",
//     hexCode: "#0000FF",
// },
// {
//     color:"green",
//     hexCode: "#00FF00",
// }
// ]

var colors = ["red","blue","green"];



btn.addEventListener("click",function(){
      var randomColor = randomNum();
            ColorFliperContainer.style.backgroundColor = colors[randomColor];
            color.textContent = colors[randomColor]
            btn.style.backgroundColor = colors[randomColor]
})


function randomNum(){
    return Math.floor(Math.random()* colors.length)
}