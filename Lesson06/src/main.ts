class Coder {
	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "JavaScript"
	) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}

	getAge() {
		return `hello, I'm ${this.age}`;
	}
}

const mahnmoud = new Coder("mahmoud", "pop", 24, "TypeScript");

console.log(mahnmoud.getAge());
//Property 'age' is private and only accessible within class 'Coder'
// console.log(mahnmoud.age);
//Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
// console.log(mahnmoud.lang);

class WebDev extends Coder {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
		this.computer = computer;
	}

	getLang() {
		return `I write this lang ${this.lang}`;
	}
}
const Ahmad = new WebDev("Lenovo", "ahmad", "pop", 20);
console.log(Ahmad.getLang());

////////////////////

interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Guitarist implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}
	play(action: string): string {
		return `${this.name} ${action} the ${this.instrument}`;
	}
}

const Abood = new Guitarist("abood", "piano");
console.log(Abood.play("play"));

/////////////////////

class Peeps {
	//static does not apply to any instantiate of Peeps class but it applies to the class it self
	static count: number = 0;
	static getCount(): number {
		return Peeps.count;
	}

	id: number;

	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const john = new Peeps("john");
const rabee = new Peeps("rabee");

console.log(Peeps.count);
console.log(john.id);
console.log(rabee.id);
