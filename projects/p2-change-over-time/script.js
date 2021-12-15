// var weather = ["cloud.png", "sun.png", "rain.png", "snow.png"];

var weather = ["cloud.png", "sun.png", "rain.png", "snow.png"];

function displayImg(){
    var num = Math.floor(Math.random() * (weather.length));
    document.canvas.src="img/"+weather[num];
}

// let img = document.getElementById("weather");

// function showWeather(num) {
// 	let num = Math.floor(Math.random()*4);
// 	document.getElementById("weather").style.backgroundImage = "url('weather[num]')";
// }

// showWeather();
// ---------------------
// var weatherList = new Array("weather/cloud.png", "weather/rain.png","weather/snow.png", "weather/sun.png");

// function showWeather() {
//      var randomWeather = Math.floor(Math.random() * weatherList.length);
//      document.getElementById("randomWeather").src = weather[randomWeather];

// image_array = [
// 	'sun.png',
// 	'cloud.png',
// 	'rain.png',
// 	'snow.png'
// ]

// function showWeather() {
// 	random_index = Math.floor(Math.random() * image_array.length);
// 	selectedImage = image_array[random_index];
// 	document.getElementById('image_shower').src = './images/$[selectedImage]'
// }

// var imagesArray = ["sun.png","cloud.png","rain.png", "snow.png"];

// function displayWeather() {
//     var num = Math.floor(Math.random() * 4);
//     document.canvas.src = imagesArray[num];
// }


var num 1;

function changePic(idx) {
    if (idx) {
        if (num == 8) return;
            num++;
    }
    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "0" + num + ".svg");
}


