var sentences = [
  "Mini Games",
  "Austin Turturro",
  "Software Engineer",
  "Front End Web Developer",
];

var timer = 6000;

document.addEventListener("DOMContentLoaded", function () {
  var total = sentences.length - 1;
  var box = document.getElementById("box");

  for (var i = 0; i <= total; i++) {
    var p = document.createElement("p");
    p.className = "sl";
    p.id = "textBox" + i;
    box.appendChild(p);

    var max = sentences[i].length - 1;

    for (var j = 0; j <= max; j++) {
      var span = document.createElement("span");
      span.style.transition = Math.random() * 3 + "s";
      span.style.transitionDelay = Math.random() + "s";
      span.textContent = sentences[i].charAt(j);
      p.appendChild(span);
    }
  }

  var maxBox = box.getElementsByTagName("p").length;
  var r = 0;

  document.getElementById("textBox" + r).classList.add("active");

  setInterval(function () {
    document.getElementById("textBox" + r).classList.remove("active");

    r++;

    if (r == maxBox) {
      r = 0;
    }

    setTimeout(function () {
      document.getElementById("textBox" + r).classList.add("active");
    }, 2000);
  }, timer);
});