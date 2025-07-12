const x = process.argv.slice(2);
const size = parseInt(x[0]);

    if(isNaN(size)){
        console.log("Missing number of occurrences");
    }
      else{
        for(let j = 0; j < size; j++){
            console.log("x".repeat(size));
        }
    }
