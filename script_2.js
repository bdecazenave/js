
// afficher un prompt et calculer la factorielle du chiffre indiqué
number = prompt("de quel nombre souhaites-tu voir la factorielle ? ")

function fact(number){
let result = 1;
  for (let i = 1; i <= number; i++)
    result = result * i;
  return result;
}
console.log ("La factorielle de " + number + " est égale à " + fact(number))
