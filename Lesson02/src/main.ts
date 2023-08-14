let myName: string;
let age: number;
let isLoading: boolean;
let album: any;

// myName=22; // this is acceptable in js

myName = "mahmoud";
age = 24;
isLoading = false;
album = true;


const sum=(a:number,b:number)=>{
    //you have to specify the type of the parameters because in js the + operator may be used to concat strings.
    return a+b
}
let postId:string | number

let isActive:boolean | number

let re:RegExp=/\w+/g