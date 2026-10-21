const smartphone = {
  modelo: "Galaxy s24",
  usuario: "Erika"
};

const bandejaDeEntrada = [];

bandejaDeEntrada.push("Whatsapp de mamá","Alerta de seguridad","Youtube: nuevo video");

bandejaDeEntrada.shift();

console.log(bandejaDeEntrada);

const totalPendientes = bandejaDeEntrada.length;

console.log(Object.keys(smartphone));

console.log(`A ${smartphone.usuario} le quedan ${totalPendientes} notificaciones`);