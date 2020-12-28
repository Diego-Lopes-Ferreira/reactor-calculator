function calculateEfficiency(production, lifetime, cost) {
  let totalProduction = (production * lifetime) - cost;
  return totalProduction;
}

function calculateValue(value, type) {
  let variation = Math.pow(1024, type);
  return value * variation;
}

function compareValues(rProduction, rLifetime, lProduction, lLifetime) {
  let bigger = {}
  let smaller = {}
  console.log(`${rLifetime} vs ${lLifetime}`);
  if (rLifetime >= lLifetime) {
    console.log('right')
    bigger = {
      production: rProduction,
      lifetime: rLifetime
    }
    smaller = {
      production: lProduction,
      lifetime: lLifetime
    }
  } else {
    smaller = {
      production: rProduction,
      lifetime: rLifetime
    }
    bigger = {
      production: lProduction,
      lifetime: lLifetime
    }
  }

  let comp = bigger.lifetime / smaller.lifetime;
  smaller.production *= comp;
  let msg = `For ${transformTime(bigger.lifetime)}`

  if (rLifetime >= lLifetime) {
    console.log('right')
    console.log(`${msg}`)
    return [bigger.production, smaller.production, msg];
  } else {
    console.log('left')
    console.log(`${msg}`)
    return [smaller.production, bigger.production, msg];
  }
}


if (tests) {
  console.groupCollapsed('reactor.js');
  console.log(calculateValue(1, 0));
  console.log(calculateValue(1, 1));
  console.log(calculateValue(1, 2));

  console.log(calculateEfficiency(calculateValue(10, 0), 20, calculateValue(1, 0)));
  console.log(calculateEfficiency(calculateValue(10, 1), 20, calculateValue(1, 1)));
  console.log(calculateEfficiency(calculateValue(10, 2), 20, calculateValue(1, 2)));

  compareValues(99, 200, 99, 100);
  compareValues(99, 200, 99, 1000);
  console.groupEnd();
}
