let score = 0;

const q1 = `What is the mitochondria?
  [1] A miserable pile of secrets
  [2] The powerhouse of the cell
  [3] Baby don't hurt me`;
const q2 = `For whom does the bell toll?
  [1] Me
  [2] We
  [3] Thee`;
const q3 = `What has two holes and smells?
  [1] A nose
  [2] A rose
  [3] A pose`;

const question = (q, correctAnswer) => {
  let userInput;
  while (!(userInput == 1 || userInput == 2 || userInput == 3)) {
    userInput = prompt(q);
  }
  if (userInput == correctAnswer) {
    score += 1;
  }
};

question(q1, 2);
question(q2, 3);
question(q3, 1);

if (score > 1) {
  if (score == 3) {
    alert("You are a genius!");
  } else if (score == 2) {
    alert("You're so close!!");
  }
} else {
  if (score == 1) {
    alert("You're on your way...");
  } else {
    alert("You'll get 'em next time!!!");
  }
}
