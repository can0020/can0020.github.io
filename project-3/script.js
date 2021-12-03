
    document.getElementById('myButton').onclick = function () {

        var myNumber = document.getElementById("number").value;

        if (myNumber >= 82) {
            link = 1;
        }
        else if (myNumber >= 73) {
            link = 2;
        }
        else if (myNumber >= 68) {
            link = 3;
        }
        else if (myNumber >= 62) {
             link = 4;
        }
        else if (myNumber >= 52) {
             link = 5;
        }
        else if (myNumber >= 48) {
             link = 6;
        }
        else if (myNumber >= 41) {
             link = 7;
        }
        else if (myNumber < 41){
             link = 8;
        }
        window.location.replace("https://can0020.github.io/project-3/"+link+".html");
    }

