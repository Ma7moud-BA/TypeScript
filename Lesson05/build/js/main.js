"use strict";
// convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
const addOrConcat = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
// here the function addOrConcat return either a number or string and we defined the variable myVal type string.
//so we use the as string to tell typescript that i know the returned value will be a string for sure
let myVal = addOrConcat(2, 3, "concat");
//be careful TS sees no problem - but a string in returned
let nextVal = addOrConcat(2, 3, "concat");
//The DOM
// this will give you a better intellisense
const img = document.getElementById("imgId");
