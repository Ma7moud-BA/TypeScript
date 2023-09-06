"use strict";
//Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("mahmoud"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "mahmoud" }));
console.log(isObj(null));
