const args = process.argv.slice(2);
const name =parseInt(args[0]);
if(isNaN(name)){
    console.log("Not a number");
 
} else {
    console.log(`My number: ${name}`);
 
}