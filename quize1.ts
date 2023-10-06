// // Q1
// let a = "pakistan";
// a=9; // compiler error on line 2 because string is not assignable to type string
// console.log(a);

// Q2
// const a=5;
// a++;
// console.log(a);


// Q3
// if(true){
//     let a=4;
//     // use a here
//     console.log(a);

// }
// else{
//     let a="string";
//     // use a here
//     console.log(a);


// }
// console.log(a);

// Q4 
// var a:number="7";
// a=9;
// console.log(a);

// Q5
// let myType={name:"zia",id:1};


// myType={id:2,name:"Tom"};


// myType={id:3,name:"Mike",gender:false}; // extra property gender gives error 




// Q6
// let array1:number[]=[5,6,7];
// let array2:Array<number>=[1,2,3,];
// let array3=new Array[number];
// let array4:number[]=[];
// let array5:number[]=new number[7]
// let array9=new Array(7);
// console.log(array9.length);
// var names:string[] = new Array("Mary","Tom","Jack","Jill")
// console.log(names);



// Q7

// let myType=<any>{name:"zia",id:1};
// myType={id:2,name:"Tom"};
// myType={id:3,name:"Mike",gender:false};

// myType={id:4,gender:false}

// Q8
// let notSure:any=4;
// notSure="maybe string insted";
// notSure=false
// console.log(notSure);


// Q10

// enum color{Red=1,Green,Blue};
// var colorName:string=color[2];
// console.log(colorName);

// Q11
// enum color2{red=1,green=2,blue=4};
// var c=color2["blue"];
// console.log(colorIndex);


// Q12
// const enum Color1 {Red=1,Green, Blue};
// var colorName:string=Color[2];
// console.log(colorName);



// var buildNameFun: (...rest: string[], fname: string) => string =
//     function (...restofName: string[], firstName: string) {
//         return firstName + " " + restofName.join("");


//     }

// console.log(buildNameFun("khan", "zia", "U"));



// var buildNameFun: (...rest: string[], fname: string) => string = function (...restOfName: string[], firstName: string) {
//     return firstName + " " + restOfName.join(" ");
// }

// console.log(buildNameFun("Khan", "Zia", "U."));


// function myCallBack(text: string) {
//     console.log("inside myCallback" + text);

// }



// function callingFunction(initialText: string, callback: (text: string) => void) {
//     callback(initialText);

// }

// callingFunction("my Text", myCallBack);














// function pickCard(x: { suit: string; card: number; }[]): number;
// function pickCard(x: number): { suit: string; card: number; };
// function pickCard(x): any {
//     if (typeof x == "object") {
//         var pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     else if (typeof x == "number") {
//         var pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// var x: any = "Tom"; // line A
// if (typeof x === 'string') { // line B
//     console.log(x.length);  // line C

// }

// x.unknown(); // line D






// function addWithUnion(arg1: string | number | boolean): string | number | boolean { // Line A
//     if (typeof arg1 === "string") {
//         return arg1 + "Hello"; // Line B
//     }
//     if (typeof arg1 === "number") {
//         return arg1 + 10; // Line C
//     }
//     if (typeof arg1 === "boolean") {
//         return arg1 && false; // Line D
//     }

// }






// var f: (string) => string;
// f = x => '(' + x + ')';
// var h: ((string) => string)[]
// h = [];
// h.push(f);
// console.log(h[0]("h"));

// var f: (string:any) => string;
// f = x => '(' + x + ')';
// var h: ((string:any) => string)[]
// h = [];
// h.push(f);
// console.log(h[0]("h"));

// let myType={name:"Zia",id:1};
// myType={id:2,name:"Tom"};
// myType={id:3,myname:"mike"};



















// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;



// let c = ((a, b) => ++a)(1, 2);
// console.log(c);




// var myFunction = f => { this.x = "x"; };













// interface Animal { name: string; }
// interface Cat extends Animal { meow():void; }

// function isCat(a: Animal): a is Cat {
//     return true;
// }

// var x: Animal;
// if (isCat(x)) {
//     x.meow();
// }









type CallBackWithString=(string)=>void;
function usingCallBack(f:CallBackWithString){
    f("This is a string")
}