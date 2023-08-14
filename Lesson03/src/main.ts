let stringArr: string[] = ["one", "mahmoud", "hello"];
let strNumArr: (string | number)[] = ["one", 2, "gg"];
let mixedDataArr: (string | number | boolean)[] = ["one", 2, true];

stringArr[0] = "two";
stringArr.push("ez");

strNumArr[0] = 4;
strNumArr.unshift("ggez");

// Tuple
let myTuple: [string, number, boolean] = ["dave", 22, true];
//the tuple is more strict than the union type, here you specify the type order of the data and the length of the array

let mixed: (string | number | boolean)[] = ["dave", 22, true];

mixed = myTuple;

// myTuple=mixed//this is not acceptable in ts because the mixed array might have more than three elements

// Object

let myObj: object;

myObj = [];
console.log(typeof myObj); // output-- object. because the array is a type of object in js

const exampleObj = {
	prop1: "mahmoud",
	prop2: true,
};
// exampleObj.prop1 = true;// this is not acceptable because the prop1 is set to "mahmoud" which is a string so the type is set to string

// this is how you declare a type in ts
interface Guitarist {
	name?: string;
	active: boolean;
	albums: (string | number)[];
}

let ggGuitarist: Guitarist = {
	name: "gg",
	active: false,
	albums: ["ez", 222],
};
// the name property is optional
let ezGuitarist: Guitarist = {
	active: true,
	albums: ["ez", 222],
};
// ggGuitarist.years=30// this is not acceptable since you cant add property that is not exist in the type Guitarist

const greetGuitarist = (guitarist: Guitarist) => {
	//since the guitarist.name is optional type script know in advance and tells you so you can add a check if the name is exist
	return guitarist.name ? `hello ${guitarist.name.toUpperCase()}` : "hello!";
};
console.log(greetGuitarist(ezGuitarist));
console.log(greetGuitarist(ggGuitarist));

//Enums

//Unlike most typescript features, enums are not a type-level addition to js but something added to the language and runtime

enum Grade {
	U = 1,
	D,
	C,
	B,
	A,
}
console.log(Grade.U); //1
