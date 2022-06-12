const questions = [
  {
    category: "Ciências",
    correct_answer: "4 a 6 litros",
    difficulty: "easy",
    incorrect_answers: ["2 a 4 litros", "7 a 10 litros", "10 a 12 litros"],
    question: "Normalmente, quantos litros de sangue uma pessoa tem?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Descartes",
    difficulty: "easy",
    incorrect_answers: ["Platão", "Galileu Galilei", "Sócrates"],
    question: "De quem é a famosa frase “Penso, logo existo”?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Brasil",
    difficulty: "medium",
    incorrect_answers: ["França", "Inglaterra", "Estados Unidos"],
    question: "De onde é a invenção do chuveiro elétrico?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Vaticano e Rússia",
    difficulty: "easy",
    incorrect_answers: [
      "Rússia e Vaticano",
      "Nauru e Rússia",
      "Rússia e Nauru",
    ],
    question: "Quais o menor e o maior país do mundo?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "João Goulart",
    difficulty: "easy",
    incorrect_answers: ["João Figueiredo", "Jacinto Anjos", "Getúlio Vargas"],
    question:
      "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    type: "multiple",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "Asterisco, meteorologia, entretido",
    difficulty: "hard",
    incorrect_answers: [
      "Asterístico, meteorologia, entertido",
      "Asterisco, metereologia, entretido",
      "Asterístico, metereologia, entretido",
    ],
    question:
      "Qual o grupo em que todas as palavras foram escritas corretamente?",
    type: "multiple",
  },
  {
    category: "Entretenimento",
    correct_answer: "Dom Quixote",
    difficulty: "medium",
    incorrect_answers: [
      "O Senhor dos Anéis",
      "O Pequeno Príncipe",
      "Harry Potter",
    ],
    question:
      "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    type: "multiple",
  },
  {
    category: "Matemática",
    correct_answer: "Infinitas",
    difficulty: "medium",
    incorrect_answers: [
      "Duas",
      "Centenas",
      "Milhares",
    ],
    question:
      "Quantas casas decimais tem o número pi?",
    type: "multiple",
  },
  {
    category: "Química",
    correct_answer: "118",
    difficulty: "hard",
    incorrect_answers: [
      "113",
      "109",
      "108",
    ],
    question:
      "Atualmente, quantos elementos químicos a tabela periódica possui?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Japão e Serra Leoa",
    difficulty: "medium",
    incorrect_answers: [
      "Noruega e Congo",
      "Estados Unidos e Angola",
      "Itália e Congo",
    ],
    question:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    type: "multiple",
  },
];

const getPersonalQuestions = (amount) => {
  questions.sort(() => Math.random() - 0.5);
  const firstQuestion = questions[0];
  questions.sort(() => Math.random() - 0.5);
  const secondQuestion = questions.filter((e) => e !== firstQuestion)[0];
  questions.sort(() => Math.random() - 0.5);
  const thirdQuestion = questions.filter(
    (e) => e !== firstQuestion && e !== secondQuestion
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionFour = questions.filter(
    (e) => e !== firstQuestion && e !== secondQuestion && e !== thirdQuestion
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionFive = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionSix = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour &&
      e !== questionFive
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionSeven = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour &&
      e !== questionFive &&
      e !== questionSix
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionEight = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour &&
      e !== questionFive &&
      e !== questionSix &&
      e !== questionSeven
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionNine = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour &&
      e !== questionFive &&
      e !== questionSix &&
      e !== questionSeven &&
      e !== questionEight
  )[0];
  questions.sort(() => Math.random() - 0.5);
  const questionTen = questions.filter(
    (e) =>
      e !== firstQuestion &&
      e !== secondQuestion &&
      e !== thirdQuestion &&
      e !== questionFour &&
      e !== questionFive &&
      e !== questionSix &&
      e !== questionSeven &&
      e !== questionEight &&
      e !== questionNine
  )[0];
  const allQuestions = [
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
  ];
  const returnQuestions = [];
  for (let i = 0; i < amount; i += 1) {
    returnQuestions.push(allQuestions[i]);
  }
  return returnQuestions;
};

export default getPersonalQuestions;
