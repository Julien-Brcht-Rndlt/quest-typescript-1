/* function hello(name : string) {
    console.log("Hello " + name);
}

//const firstName : string = "bob";
const firstName  = "bob"; // type inference

hello(firstName);
hello(firstName + " marley");

function concat(a : string, b : string): string {
    return a + b;
}

//const wcs : string = concat("Wild", concat("Code", "School"));
const wcs = concat("Wild", concat("Code", "School")); // type inference
console.log(wcs);
 */
//or
var hello = function (name) { return console.log("Hello " + name); };
var firstName = "bob"; // type inference
hello(firstName);
hello(firstName + " marley");
var concat = function (a, b) { return a + b; };
//const wcs : string = concat("Wild", concat("Code", "School"));
var wcs = concat("Wild", concat("Code", "School")); // type inference
console.log(wcs);
