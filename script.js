const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

const nameDaysUppercase = weekdays.map((day) => day.toUpperCase());
console.log('Jména dní měsíce velkými písmeny: ', nameDaysUppercase);

const twoLetter = weekdays.map((day) => day.slice(0, 2));

console.log('První dvě písmena: ', twoLetter);

const countOfTheMonths = months.map((month) => month.days);

console.log('Počet dní: ', countOfTheMonths);

const firstDayOfTheMonth = months.map((month) => `1. ${month.name} 2020`);

console.log('První den každého měsíce: ', firstDayOfTheMonth);
