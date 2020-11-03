const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let name, activity, song, meal, food, sport, superpower;
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Name: ${answer}`);
  name = answer;
  rl.question('What activity do you enjoy? ', (answer) => {
    console.log(`Activity: ${answer}`);
    activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Song: ${answer}`);
      song = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Meal: ${answer}`);
        meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal ', (answer) => {
          console.log(`Food: ${answer}`);
          food = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Sport: ${answer}`);
            sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Superpower: ${answer}`);
              superpower = answer;
              console.log(`${name} loves listening to ${song} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});