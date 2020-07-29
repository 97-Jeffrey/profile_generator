const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? ', (answer1) => {

  rl.question('What an activity you like doing? ', (answer2) => {

    rl.question('What do you listen to while doing that? ', (answer3) => {

      rl.question('Which meal is your favourite? ', (answer4) => {

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
           
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
           
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
           
               console.log(`Thank you for your valuable feedback. `);

               console.log(`${answer1} loves to ${answer2} when listen to ${answer3},${answer1}'s favorite meal is ${answer4} and the favorite food is ${answer5}, ${answer1} loves ${answer6} and got superpower of ${answer7}`)
              
              rl.close();
            });
            
          });
          
        });

        
      });

      
    });

    
  });

  
});





