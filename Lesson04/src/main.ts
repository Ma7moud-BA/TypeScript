//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type UserID = stringOrNumber;

type Guitarist = {
	name?: string;
	active: boolean;
	albums: stringOrNumberArray;
};

//Literal types
let myName: "mahmoud";
let userName: "mahmoud" | "Ahmad" | "Amy";

//the userName can only be one of the three assigned above and you get intellisense for this
userName = "mahmoud";

//Functions

//we specify this function to return a number
const add = (a: number, b: number): number => {
	return a + b;
};

// any side effect function should be a void type
const logMsg = (message: any): void => {
	console.log(message);
};

let subtract = function (c: number, d: number): number {
	return c - d;
};

type mathFunction = (a: number, b: number) => number;
//same thing using interface but usually use interface with objects or classes
// interface mathFunction {
// 	(a: number, b: number): number;
// }

let multiply: mathFunction = function (e, f) {
	return e * f;
};

//Optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== "undefined") {
		return a + b + c;
	}
	return a + b;
};

//Rest Parameters

const total = (...nums: number[]): number => {
	return nums.reduce((total, curr) => {
		return total + curr;
	});
};
logMsg(total(1, 2, 3, 4, 5));

//never type

const createError = (errMsg: string) => {
	throw new Error(errMsg);
};

// if you see the the function returns a never type, make sure to throw an error because there might be a problem like an endless loop

//this function returns a never because there is an endless loop

const infinite = () => {
	let i: number = 1;
	while (true) {
		i++;
	}
};
//this function returns void so its valid
const infinite2 = () => {
	let i: number = 1;
	while (true) {
		i++;
		if (i > 100) break;
	}
};

//custom type guard
const isNumber = (value: any): boolean => {
	return typeof value === "number" ? true : false;
};
//use of never type
const numberOrString = (value: number | string): string => {
	if (typeof value === "string") return "string";
	if (isNumber(value)) return "number";
	//to handle a potential undefined
	return createError("this should never happen!");
};
