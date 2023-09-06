"use strict";
class Coder {
    constructor(name, music, age, lang = "JavaScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
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
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write this lang ${this.lang}`;
    }
}
const Ahmad = new WebDev("Lenovo", "ahmad", "pop", 20);
console.log(Ahmad.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Abood = new Guitarist("abood", "piano");
console.log(Abood.play("play"));
/////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
//static does not apply to any instantiate of Peeps class but it applies to the class it self
Peeps.count = 0;
const john = new Peeps("john");
const rabee = new Peeps("rabee");
console.log(Peeps.count);
console.log(john.id);
console.log(rabee.id);
