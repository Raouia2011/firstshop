"use strict";

var container = document.getElementById("container");
var img = document.getElementById("img");
var product = document.getElementById("product");
var cartShopping = [];
var btn = document.getElementById("kaufBtn"); //change bg color

function changeBgColor(color) {
  container.style.background = color;
} //change pic


function phones(phone) {
  img.src = phone;
} //buy product


function schreibe() {
  document.open();
  document.write('<html><head><title>Neue Seite</title></head>');
  document.write('<body>');
  document.write('<p>Hier zeigt sich der Unterschied zwischen ');
  document.write('write und writeln:</p>');
  document.write('<pre>');
  document.write('Während der Text von write nacheinander');
  document.write(' ausgegeben wird, ');
  document.writeln('wird der Text von writeln');
  document.writeln(' in');
  document.writeln(' einzelne');
  document.writeln(' Zeilen');
  document.writeln('gesetzt!');
  document.write('</pre>');
  document.write('</body></html>');
  document.close();
}

wnd = open();

btn.onclick = function () {
  wnd = open("form.html", '', 'width=600,height=400');
  wnd.blur();
  wnd.focus(); //wnd.close();
};
/**/