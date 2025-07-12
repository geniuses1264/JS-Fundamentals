// 1. Get the input
const args = process.argv.slice(2);
const size = parseInt(args[0]);

// 2. Validate it
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // 3. Now safely run the loop
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
