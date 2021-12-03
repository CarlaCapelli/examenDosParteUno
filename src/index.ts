let camila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let franco: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let sofia: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let matias: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let agustina: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

function maxima() {
  let semana: number;
  let meses: string;
  let mayorCamila: number = camila[0];
  let mayorFranco: number = franco[0];
  let mayorSofia: number = sofia[0];
  let mayorMatias: number = matias[0];
  let mayorAgustina: number = agustina[0];
  for (let i = 0; i < camila.length; i++) {
    if (camila[i] > mayorCamila) {
      mayorCamila = camila[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta maxima de Camila es ",
    mayorCamila,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < franco.length; i++) {
    if (franco[i] > mayorFranco) {
      mayorFranco = franco[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta maxima de Franco es ",
    mayorFranco,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < sofia.length; i++) {
    if (sofia[i] > mayorSofia) {
      mayorSofia = sofia[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta maxima de Sofia es ",
    mayorSofia,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < matias.length; i++) {
    if (matias[i] > mayorMatias) {
      mayorMatias = matias[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta maxima de Matias es ",
    mayorMatias,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < agustina.length; i++) {
    if (agustina[i] > mayorAgustina) {
      mayorAgustina = agustina[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta maxima de Agustina es ",
    mayorAgustina,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );
}

function minima() {
  let semana: number;
  let meses: string;
  let menorCamila: number = camila[0];
  let menorFranco: number = franco[0];
  let menorSofia: number = sofia[0];
  let menorMatias: number = matias[0];
  let menorAgustina: number = agustina[0];
  for (let i = 0; i < camila.length; i++) {
    if (camila[i] < menorCamila) {
      menorCamila = camila[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta menor de Camila es ",
    menorCamila,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < franco.length; i++) {
    if (franco[i] < menorFranco) {
      menorFranco = franco[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta menor de Franco es ",
    menorFranco,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < sofia.length; i++) {
    if (sofia[i] < menorSofia) {
      menorSofia = sofia[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta menor de Sofia es ",
    menorSofia,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < matias.length; i++) {
    if (matias[i] < menorMatias) {
      menorMatias = matias[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta menor de Matias es ",
    menorMatias,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );

  for (let i = 0; i < agustina.length; i++) {
    if (agustina[i] < menorAgustina) {
      menorAgustina = camila[i];

      if (i >= 0 && i <= 3) {
        meses = "enero";
      } else if (i > 3 && i <= 7) {
        meses = "febrero";
      } else {
        meses = "marzo";
      }
      semana = i + 1;
    }
  }
  console.log(
    " la venta menor de Agustina es ",
    menorAgustina,
    "en la semana ",
    semana,
    "en el mes de ",
    meses
  );
}

function promSem() {
  let sumaCamila: number = 0;
  let sumaFranco: number = 0;
  let sumaSofia: number = 0;
  let sumaMatias: number = 0;
  let sumaAgustina: number = 0;
  let promCamila: number = 0;
  let promFranco: number = 0;
  let promSofia: number = 0;
  let promMatias: number = 0;
  let promAgustina: number = 0;
  for (let i: number = 0; i < camila.length; i++) {
    sumaCamila = sumaCamila + camila[i];
    sumaFranco = sumaFranco + franco[i];
    sumaSofia = sumaSofia + sofia[i];
    sumaMatias = sumaMatias + matias[i];
    sumaAgustina = sumaAgustina + agustina[i];
  }
  promCamila = sumaCamila / camila.length;
  promFranco = sumaFranco / franco.length;
  promSofia = sumaSofia / sofia.length;
  promMatias = sumaMatias / matias.length;
  promAgustina = sumaAgustina / agustina.length;

  console.log("el promedio semanal de CAMILA es", promCamila);
  console.log("el promedio semanal de Franco es", promFranco);
  console.log("el promedio semanal de Sofia es", promSofia);
  console.log("el promedio semanal  de Matias es", promMatias);
  console.log("el promedio semanal de Agustina es", promAgustina);
}

function promMensual() {
  let sumaMesUnoCamila: number = 0;
  let sumaMesDosCamila: number = 0;
  let sumaMesTresCamila: number = 0;
  let sumaMesUnoFranco: number = 0;
  let sumaMesDosFranco: number = 0;
  let sumaMesTresFranco: number = 0;
  let sumaMesUnoSofia: number = 0;
  let sumaMesDosSofia: number = 0;
  let sumaMesTresSofia: number = 0;
  let sumaMesUnoMatias: number = 0;
  let sumaMesDosMatias: number = 0;
  let sumaMesTresMatias: number = 0;
  let sumaMesUnoAgustina: number = 0;
  let sumaMesDosAgustina: number = 0;
  let sumaMesTresAgustina: number = 0;
  let promCamila: number = 0;
  let promFranco: number = 0;
  let promSofia: number = 0;
  let promMatias: number = 0;
  let promAgustina: number = 0;

  for (let i = 0; i < 4; i++) {
    sumaMesUnoCamila = sumaMesUnoCamila + camila[i];
    sumaMesUnoFranco = sumaMesUnoFranco + franco[i];
    sumaMesUnoSofia = sumaMesUnoSofia + sofia[i];
    sumaMesUnoMatias = sumaMesUnoMatias + matias[i];
    sumaMesUnoAgustina = sumaMesUnoAgustina + agustina[i];
  }
  for (let i = 4; i < 8; i++) {
    sumaMesDosCamila = sumaMesDosCamila + camila[i];
    sumaMesDosFranco = sumaMesDosFranco + franco[i];
    sumaMesDosSofia = sumaMesDosSofia + sofia[i];
    sumaMesDosMatias = sumaMesDosMatias + matias[i];
    sumaMesDosAgustina = sumaMesDosAgustina + agustina[i];
  }
  for (let i = 8; i < 12; i++) {
    sumaMesTresCamila = sumaMesTresCamila + camila[i];
    sumaMesTresFranco = sumaMesTresFranco + franco[i];
    sumaMesTresSofia = sumaMesTresSofia + sofia[i];
    sumaMesTresMatias = sumaMesTresMatias + matias[i];
    sumaMesTresAgustina = sumaMesTresAgustina + agustina[i];
  }
  promCamila =
    (sumaMesUnoCamila + sumaMesDosCamila + sumaMesTresCamila) / camila.length;
  promFranco =
    (sumaMesUnoFranco + sumaMesDosFranco + sumaMesTresFranco) / franco.length;
  promSofia =
    (sumaMesUnoSofia + sumaMesDosSofia + sumaMesTresSofia) / sofia.length;
  promMatias =
    (sumaMesUnoMatias + sumaMesDosMatias + sumaMesTresMatias) / matias.length;
  promAgustina =
    (sumaMesUnoAgustina + sumaMesDosAgustina + sumaMesTresAgustina) /
    agustina.length;
  console.log("el promedio mensual de  Camila es  ", promCamila);
  console.log("el promedio mensual de Franco es ", promFranco);
  console.log("el promedio mensual de Sofia es ", promSofia);
  console.log("el promedio mensual de Matias es ", promMatias);
  console.log("el promedio mensual de Agustina es ", promAgustina);
}
maxima();
minima();
promSem();
promMensual();
