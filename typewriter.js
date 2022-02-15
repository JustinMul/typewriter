const sentence = "hello there from lighthouse labs";
let counter = 0;
let delay = 0;
for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
    if (counter === sentence.length - 1) {
      console.log('');
    }
    counter++;
    
  },delay);
  delay += 50;
  
}

