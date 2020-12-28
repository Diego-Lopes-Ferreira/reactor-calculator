console.groupCollapsed('forms.js');
let typeSelects = document.querySelectorAll('select.type');
for (let select of typeSelects) {
  select.innerHTML = `
    <option selected disabled>Choose one</option>
    <option value="0">1</option>
    <option value="1">K</option>
    <option value="2">M</option>
    <option value="3">B</option>
    <option value="4">T</option>
    <option value="5">AA</option>
    <option value="6">AB</option>
    <option value="7">AC</option>
    <option value="8">AD</option>
  `
  if (tests) {
    console.log(select)
  }
}

let EOHSelects = document.querySelectorAll('select.energy-or-heat');
for (let select of EOHSelects) {
  select.innerHTML = `
    <!-- option selected disabled>Choose one</option -->
    <option value="1">Energy (Wind Turbine)</option>
    <option selected value="2">Heat</option>
  `
  if (tests) {
    console.log(select)
  }
}
console.groupEnd();
