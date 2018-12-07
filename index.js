var kittens = ["Milo", "Otis", "Garfield"] ;//define your array here
  function destructivelyAppendKitten() {
    kittens.push("Ralph");
  }
function destructivelyPrependKitten() {
  kittens.unshift('Bob');

}
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield');

}

function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo');

}
var appendKitten=["Broom"];

  kittens.concat(appendKitten);
