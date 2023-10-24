const measureKelvin = function () {
  const measurements = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius"),
  };

  const kelvin = measurements.value + 273;
  return kelvin;
};
console.log(measureKelvin());
