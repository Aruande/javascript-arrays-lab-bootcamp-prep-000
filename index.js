var kittens = ["Milo", "Otis", "Garfield"] ;//define your array here
  function destructivelyAppendKitten(name) {
    kittens.push(name);
  }
function destructivelyPrependKitten(name) {
  kittens.unshift(name);

}
function destructivelyRemoveLastKitten() {
  kittens.pop();

}
function appendKitten(name) {
return  kittens.concat(name);

}
 function destructivelyRemoveFirstKitten() {
   return kittens.shift();
}


function prependKitten(name) {
  return kittens.unshift(name);
}
