Function.prototype.mybind = function (name, ...args) {
  let self = this;
  return function (...args2) {
    self.apply(name, [...args, ...args2]);
  };
};

let name = {
  firstName: "Pranjal",
  lastName: "Tripathi",
};
const getName = function (city, state, country, continent) {
  console.log(this.firstName, this.lastName, city, state, country, continent);
};

let bindFunc = getName.bind(name, "Pratapgarh", "UP");
bindFunc("India", "Asia");

let bindFunc2 = getName.mybind(name, "Pratapgarh", "UP");
bindFunc2("India", "Asia");