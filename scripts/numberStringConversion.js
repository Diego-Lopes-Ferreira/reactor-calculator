function transformTime(time) {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let msg = '';

  if (time >= 86400) {
    days = Math.floor(time / 86400)
    time -= days * 86400;
    msg += `${days} d `
  }
  if (time >= 3600) {
    hours = Math.floor(time / 3600);
    time -= hours * 3600;
    msg += `${hours} h `
  }
  if (time >= 60) {
    minutes = Math.floor(time / 60);
    time -= minutes * 60;
    msg += `${minutes} m `
  }
  msg += `${time} s`

  console.log(msg);
  return msg;
}

function transformEnergy(energy, decimals = 2) {
  if (energy === 0) return '0 energy';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['', 'K', 'M', 'B', 'T', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG'];

  const i = Math.floor(Math.log(energy) / Math.log(k));

  let final = parseFloat((energy / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  let msg = `${final}`
  return msg
}


if (tests) {
  console.group('numberStringConversion.js');
  transformTime(12);
  transformTime(123);
  transformTime(12334);
  transformTime(1233489);
  console.warn();
  console.log(transformEnergy(100));
  console.log(transformEnergy(1032));
  console.log(transformEnergy(Math.pow(1024, 6) + 1024));
  console.log(transformEnergy(103242612));
  console.log(transformEnergy(10324261212321312));
  console.groupEnd();
}
