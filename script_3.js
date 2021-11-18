// afficher un prompt et dessiner la pyramide de Mario selon sa réponse
stairs = prompt("Combien d'étages doit faire ta pyramide ?")

let n = stairs;
let string = "";
for (let i = 1; i <= n; i++) {
  // impression des espaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // impression des hashtags
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
