type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>"world";

const addOrConcat = (
	a: number,
	b: number,
	c: "add" | "concat"
): number | string => {
	if (c == "add") {
		return a + b;
	} else {
		return "" + a + b;
	}
};

// here the function addOrConcat return either a number or string and we defined the variable myVal type string.
//so we use the as string to tell typescript that i know the returned value will be a string for sure
let myVal: string = addOrConcat(2, 3, "concat") as string;
//be careful TS sees no problem - but a string in returned
let nextVal: number = addOrConcat(2, 3, "concat") as number;

//The DOM
// this will give you a better intellisense
const img = document.getElementById("imgId") as HTMLImageElement;
