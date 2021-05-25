///////////////////SVG RELOJ/////////////////////
//Crear relog
var reloj01 = SVG("reloj01").size(600, 600);
reloj01.viewbox(0, 0, 600, 600);

var fondo = reloj01
  .circle(60)
  .move(50, 50)
  .fill("#222525")
  .stroke({ width: 1, opacity: 0.5 });
var fondo2 = reloj01
  .circle(56)
  .move(fondo.cx() - 28, fondo.cy() - 28)
  .fill("#ea4040");
var fondo3 = reloj01
  .circle(46)
  .move(fondo2.cx() - 23, fondo2.cy() - 23)
  .fill("#222525")
  .stroke({ color: "#f06", opacity: 0.6, width: 1 });
var fondo4 = reloj01
  .rect(20, 5)
  .move(fondo2.cx() - 10, fondo2.cy() + 5)
  .fill("#ea4040")
  .stroke({ color: "#00000059", width: 0.5 });
var numeros = reloj01
  .text("12")
  .size(5)
  .move(fondo2.x() + 25, fondo2.y());
var numeros6 = reloj01
  .text("6")
  .size(5)
  .move(fondo2.x() + 26, fondo2.y() + 51);
var numeros3 = reloj01
  .text("3")
  .size(5)
  .move(fondo2.x() + 52, fondo2.y() + 25);
var numeros9 = reloj01
  .text("9")
  .size(5)
  .move(fondo2.x() + 1, fondo2.y() + 25);
var horasR = reloj01
  .text("03:07")
  .size(4)
  .move(fondo4.x() + 5, fondo4.y());
var segundos = reloj01
  .rect(20, 0.6)
  .move(fondo3.cx(), fondo3.cy() - 0.5)
  .fill("#fff");
var minutos = reloj01
  .rect(15, 0.7)
  .move(fondo3.cx(), fondo3.cy() - 0.5)
  .fill("#000");
var centro = reloj01
  .circle(2)
  .move(fondo3.cx() - 1, fondo3.cy() - 1)
  .fill("#000");
var Reloj = reloj01.group();
momentoActual = new Date();
hora = momentoActual.getHours();
minuto = momentoActual.getMinutes();
segundo = momentoActual.getSeconds();
minutos.rotate(minuto * 6 - 90, fondo3.cx(), fondo3.cy());
segundos.rotate(segundo * 6 - 90, fondo3.cx(), fondo3.cy());
if (hora - 12 >= 12) {
  if (minuto < 10) {
    horasR.text(hora + ":0" + minuto);
  } else {
    horasR.text(hora + ":" + minuto);
  }
} else {
  if (hora - 12 > 9) {
    if (minuto < 10) {
      horasR.text(hora - 12 + ":0" + minuto);
    } else {
      horasR.text(hora - 12 + ":" + minuto);
    }
  } else {
    if (minuto < 10) {
      horasR.text("0" + (hora) + ":0" + minuto);
    } else {
      horasR.text("0" + (hora) + ":" + minuto);
    }
  }
}

Reloj.add(fondo);
Reloj.add(fondo2);
Reloj.add(fondo3);
Reloj.add(fondo4);
Reloj.add(horasR.dmove(0,0));
Reloj.add(numeros);
Reloj.add(numeros6);
Reloj.add(numeros3);
Reloj.add(numeros9);
Reloj.add(segundos);
Reloj.add(minutos);
Reloj.add(centro);

Reloj.move(200, 200).scale(8);

var rot = segundo;
var rotm = minuto;
var rotH = hora;
var rotateMinuto = minuto * 6 - 90;
var rotateSegundo = segundo * 6 - 90;

function reloj() {
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();

  rotateMinuto = minuto * 6 - 90;
  rotateSegundo = segundo * 6 - 90;

  minutos.rotate(rotateMinuto, fondo3.cx(), fondo3.cy());
  segundos.rotate(rotateSegundo, fondo3.cx(), fondo3.cy());

  if (hora - 12 >= 12) {
    if (minuto < 10) {
      horasR.text(hora + ":0" + minuto);
    } else {
      horasR.text(hora + ":" + minuto);
    }
  } else {
    if (hora - 12 > 9) {
      if (minuto < 10) {
        horasR.text(hora - 12 + ":0" + minuto);
      } else {
        horasR.text(hora - 12 + ":" + minuto);
      }
    } else {
      if (minuto < 10) {
        horasR.text("0" + (hora) + ":0" + minuto);
      } else {
        horasR.text("0" + (hora) + ":" + minuto);
      }
    }
  }
  setTimeout(reloj, 1000);
}

$(document).ready(function () {
  reloj();
});

function FullScreen() {
  if (!document.fullscreenElement || !document.webkitFullscreenElement) {
    try {
             var uno = document.getElementById("idFullScrean");
        if (uno.innerHTML == "fullscreen_exit") 
          {
            uno.innerHTML = "fullscreen";
          }else{uno.innerHTML = "fullscreen_exit";}
      document.documentElement.webkitRequestFullscreen();
    } catch (e) {
      document.documentElement.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen || document.webkitExitFullscreen) {
      try {
        var uno = document.getElementById("idFullScrean");
        if (uno.innerHTML == "fullscreen_exit") 
          {
            uno.innerHTML = "fullscreen";
          }else{uno.innerHTML = "fullscreen_exit";} 
        document.webkitExitFullscreen();
      } catch (e) {
        document.exitFullscreen();
      }
    }
  }
}
