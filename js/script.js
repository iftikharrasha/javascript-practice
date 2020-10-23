function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
};


function dateShow() {
    document.getElementById('date').innerHTML = Date();
};


function clickMe() {
    document.getElementById("me").innerHTML = "YOU CLICKED ME!";
};

function textColor() {
    document.getElementById("tcol").style.fontSize = "40px";
};

function bodyColor() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
};

function copyText() {
    document.getElementById("copy").innerHTML = "You copied text!"
};

function doubleClick() {
    document.getElementById("double").innerHTML = "Hello World";
};

var elements = document.getElementsByClassName("child");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {

        // remove class from sibling

        var el = elements[0];
        while (el) {
            if (el.tagName === "DIV") {
                //remove class
                el.classList.remove("bak");

            }
            // pass to the new sibling
            el = el.nextSibling;
        }

        this.classList.add("bak");
    };
}