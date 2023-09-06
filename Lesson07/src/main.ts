// Index Signatures

interface TransactionObject {
	Pizza: number;
	Books: number;
	Job: number;
}
interface TransactionObject2 {
	[index: string]: number;
}
interface TransactionObject3 {
	[index: string]: number;
	Pizza: number;
	Books: number;
	Job: number;
}
const todaysTransactions: TransactionObject2 = {
	Pizza: -10,
	Books: -5,
	Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";

// if you want to access the object props dynamically you need to use index signatures
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObject2): number => {
	let total = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

////////////////////////
interface Student {
	// [key: string]: string | number | number[] | undefined; // include undefined here because teh classes prop is optional
	name: string;
	gpa: number;
	classes?: number[];
}

const student: Student = {
	name: "mahmoud",
	gpa: 24,
	classes: [100, 200],
};
// a drawback for the index signatures the following line will not give an error because the student may have an undefined prop
// console.log(student.test)

for (const key in student) {
	// this is how you can iterate throw an object that doesn't has an index signature
	// keyof creates a union type, and this union type is the specific string literal
	console.log(`${key}:${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
	// use this method if you don't know the type of the object
	console.log(student[key as keyof typeof student]);
});

//with functions

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "gpa");
