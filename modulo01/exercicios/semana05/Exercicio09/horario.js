setInterval(function HoraAtual() {
  let hora = new Date();
  console.log(`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
}, 2000);
