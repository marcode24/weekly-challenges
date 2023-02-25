const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
const questions = require('./questions');

const printResult = (total) => {
  let result = 'Tu casa es: ';
  if (total <= 10) {
    result += houses[0];
  } else if (total <= 16) {
    result += houses[1];
  } else if (total <= 22) {
    result += houses[2];
  } else {
    result += houses[3];
  }
  return result;
};

let counter = 0;

const start = () => {
  const askQuestion = (i) => {
    console.log(`\n${questions[i].question}\n`);
    for (let j = 0; j < questions[i].answers.length; j++) {
      console.log(`${j + 1}. ${questions[i].answers[j]}`);
    }
    readLine.question('\nSeleccione una opcion:', (answer) => {
      const answerTemp = parseInt(answer, 10) || 0;
      counter += answerTemp > 0 && answerTemp <= 4 ? answerTemp : 0;

      if (i < questions.length - 1) {
        askQuestion(i + 1);
      } else {
        readLine.close();
        console.log(printResult(counter));
      }
    });
  };
  askQuestion(0);
};

start();

module.exports = printResult;
