document.querySelector('#calculate').onclick = render;

function render() {
  let [rResult, rLifetime] = calculateInfo('r');
  let [lResult, lLifetime] = calculateInfo('l');

  let [rResultFinal, lResultFinal, msg] = compareValues(rResult, rLifetime, lResult, lLifetime);

  let rightResult = document.querySelector('#right-result');
  rightResult.innerHTML = transformEnergy(rResultFinal);

  let leftResult = document.querySelector('#left-result');
  leftResult.innerHTML = transformEnergy(lResultFinal);

  let message = document.querySelector('#time-setting');
  message.innerHTML = msg;
}


function calculateInfo(LOR) {
  let productionN = Number(document.querySelector(`#${LOR}-production`).value);
  let productionT = Number(document.querySelector(`#${LOR}-production-type`).value);
  let heatOrEnergy = Number(document.querySelector(`#${LOR}-eor`).value);
  let production = calculateValue(productionN, productionT) * heatOrEnergy;

  let lifetimeN = Number(document.querySelector(`#${LOR}-lifetime`).value);
  let lifetimeT = Number(document.querySelector(`#${LOR}-lifetime-type`).value);
  let lifetime = calculateValue(lifetimeN, lifetimeT);

  let costN = Number(document.querySelector(`#${LOR}-cost`).value);
  let costT = Number(document.querySelector(`#${LOR}-cost-type`).value);
  let cost = calculateValue(costN, costT);

  let resultN = calculateEfficiency(production, lifetime, cost);

  if (tests) {
    console.group(`calculateInfo( LOR = ${LOR} )`);
    console.log(`productionN -> ${productionN}`);
    console.log(`productionT -> ${productionT}`);
    console.log(`production -> ${production}`);
    console.log(`heatOrEnergy -> ${heatOrEnergy}`);
    console.log(`lifetime -> ${lifetime}`);
    console.log(`costN -> ${costN}`);
    console.log(`costT -> ${costT}`);
    console.log(`cost -> ${cost}`);
    console.groupEnd();
  }
  return [resultN, lifetime];
}
