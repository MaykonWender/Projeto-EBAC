AOS.init();

const dataDoEvento = new Date("Dec 13, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const DiaEmMs = 1000 * 60 * 60 *24;
    const HoraEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

   const diasAteOEvento = Math.floor(distanciaAteOEvento / DiaEmMs);
   const horasAteOEvento = Math.floor(distanciaAteOEvento % DiaEmMs / HoraEmMs);
   const minutosAteOEvento = Math.floor((distanciaAteOEvento % HoraEmMs) /minutoEmMs);
   const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

   document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

   if (diasAteOEvento < 0 ) { 
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = "Seu aniversario chegou"
   }
},1000);