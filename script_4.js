

// Ci-dessous l'array à partir duquel nous allons travailler.
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// filtrer pour ne conserver que les entrepreneurs nés dans les années 1970
function birthdateduringseventies(entrepreneur) {
     return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
  }
let result = entrepreneurs.filter(birthdateduringseventies);
  console.log("Ci-dessous la liste de tous les entrepreneurs nés dans les années 70")
  console.log(result);

// Filtrer le array par ordre alphabétique du nom de famille
entrepreneurs.sort((personA, personB) => {
  if (personA.last < personB.last) {
    return -1;
  } else if (personA.last > personB.last) {
    return 1;
  }
  return 0;
});
console.log("Ci-dessous la liste de tous les entrepreneurs classés par ordre alphabétique")
console.log(entrepreneurs);

// Creer un nouvel array avec prénom et nom
let onlyfirstandlastname = []

for(let entrepreneur in entrepreneurs){
  onlyfirstandlastname.push(entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last);
};
console.log("Ci-dessous la liste de tous les prénoms+noms des entrepreneurs")
console.log(onlyfirstandlastname)

//Quel age ont les entrepreneurs ?
let age = [];
for(let entrepreneur in entrepreneurs){
  age.push(`${entrepreneurs[entrepreneur].first} ${entrepreneurs[entrepreneur].last} a/aurait ${2021 - entrepreneurs[entrepreneur].year} ans aujourd'hui`);
};
console.log("Ci-dessous l'age de tous les entrepreneurs")
console.log(age);
