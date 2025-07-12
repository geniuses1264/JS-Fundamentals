const x = process.argv.slice(2);
const names = parseInt(x[0]);

    if(isNaN(names)){
        console.log("Missing number of occurrences");
    }
      else{
        for(let j = 0; j < names; j++){
            console.log("C is fun");
        }
    }

