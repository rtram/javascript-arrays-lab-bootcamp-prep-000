var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten() {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = [...kittens,name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = [name,...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,2);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(-2);
  return newKittens;
}
