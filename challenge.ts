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

const hello = (name : string) => console.log("Hello " + name);

const firstName  = "bob"; // type inference

hello(firstName);
hello(firstName + " marley");

const concat = (a : string, b : string): string => a + b;

//const wcs : string = concat("Wild", concat("Code", "School"));
const wcs = concat("Wild", concat("Code", "School")); // type inference
console.log(wcs);