const getReadingsOutsideRange = (station, min, max) =>
  station.readings.filter(r => r.temp < min || r.temp > max);

module.exports = getReadingsOutsideRange;

/* Motivation: 
 * Quand des valeurs vont tout le temps ensemble, les grouper en une seule a plus de sens */
