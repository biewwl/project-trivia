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
    category: "Ciências",
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
  {
    category: "Inglês",
    correct_answer: "Lenda",
    difficulty: "medium",
    incorrect_answers: [
      "Legenda",
      "Conto",
      "Legendário",
    ],
    question:
      "O que a palavra legend significa em português?",
    type: "multiple",
  },
  {
    category: "Esportes",
    correct_answer: "7",
    difficulty: "easy",
    incorrect_answers: [
      "6",
      "8",
      "9",
    ],
    question:
      "Qual o número mínimo de jogadores numa partida de futebol?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Pablo Picasso",
    difficulty: "medium",
    incorrect_answers: [
      "Diego Rivera",
      "Tarsila do Amaral",
      "Salvador Dalí",
    ],
    question:
      "Quem pintou “Guernica”?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "8 minutos",
    difficulty: "hard",
    incorrect_answers: [
      "12 minutos",
      "8 segundos",
      "12 segundos",
    ],
    question:
      "Quanto tempo a luz do Sol demora para chegar à Terra?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "Argentina",
    difficulty: "hard",
    incorrect_answers: [
      "Cubana",
      "Paraguaia",
      "Peruana",
    ],
    question:
      "Qual a nacionalidade de Che Guevara?",
    type: "multiple",
  },
  {
    category: "Esportes",
    correct_answer: "2,43m e 2,24m",
    difficulty: "hard",
    incorrect_answers: [
      "2,4m para ambos",
      "2,5m e 2m",
      "2,45m e 2,15m",
    ],
    question:
      "Qual a altura da rede de vôlei nos jogos masculino e feminino?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "Paleolítico",
    difficulty: "easy",
    incorrect_answers: [
      "Neolítico",
      "Período da Pedra Polida",
      "Idade dos Metais",
    ],
    question:
      "Em que período da pré-história o fogo foi descoberto?",
    type: "multiple",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "Substantivo, verbo e preposição.",
    difficulty: "hard",
    incorrect_answers: [
      "Vogais, semivogais e consoantes",
      "Artigo, verbo transitivo e verbo intransitivo",
      "Fonologia, Morfologia e Sintaxe",
    ],
    question:
      "Qual das alternativas abaixo apenas contêm classes de palavras?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Pico da Neblina",
    difficulty: "easy",
    incorrect_answers: [
      "Pico Paraná",
      "Monte Roraima",
      "Pico Maior de Friburgo",
    ],
    question:
      "Qual a montanha mais alta do Brasil?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "299 792 458 m/s",
    difficulty: "hard",
    incorrect_answers: [
      "300 000 000 m/s",
      "199 792 458 m/s",
      "30 000 000 m/s",
    ],
    question:
      "Qual a velocidade da luz?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Macau",
    difficulty: "medium",
    incorrect_answers: [
      "Moçambique",
      "Portugal",
      "Filipinas",
    ],
    question:
      "Em qual local da Ásia o português é língua oficial?",
    type: "multiple",
  },
  {
    category: "Entretenimento",
    correct_answer: "Maquiavel",
    difficulty: "easy",
    incorrect_answers: [
      "Antoine de Saint-Exupéry",
      "Montesquieu",
      "Rousseau",
    ],
    question:
      "Quem é o autor de “O Príncipe”?",
    type: "multiple",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "Eu caibo",
    difficulty: "easy",
    incorrect_answers: [
      "Eu cabo",
      "Eu coube",
      "Eu caberei",
    ],
    question:
      "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Gonorreia, clamídia e sífilis.",
    difficulty: "medium",
    incorrect_answers: [
      "Aids, tricomoníase e ebola",
      "Botulismo, cistite e gonorreia",
      "Hepatite B, febre tifoide e hanseníase",
    ],
    question:
      "Quais destas doenças são sexualmente transmissíveis?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Rússia",
    difficulty: "easy",
    incorrect_answers: [
      "Filipinas",
      "Marrocos",
      "Groenlândia",
    ],
    question:
      "Qual destes países é transcontinental?",
    type: "multiple",
  },
  {
    category: "Lígua Portuguesa",
    correct_answer: "É um homem mal",
    difficulty: "madium",
    incorrect_answers: [
      "Mais uma vez, portou-se mal",
      "Esse é o mal de todos",
      "Mal falou nele, o fulano apareceu",
    ],
    question:
      "Em qual das orações abaixo a palavra foi empregada incorretamente?",
    type: "multiple",
  },
  {
    category: "Entretenimento",
    correct_answer: "Antônio Francisco Lisboa",
    difficulty: "hard",
    incorrect_answers: [
      "Alexandrino Francisco Lisboa",
      "Manuel Francisco Lisboa",
      "Alex Francisco Lisboa",
    ],
    question:
      "Qual era o nome de Aleijadinho?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Zeus e Hades",
    difficulty: "medium",
    incorrect_answers: [
      "Ares e Hermes",
      "Cronos e Apolo",
      "Zeus e Ares",
    ],
    question:
      " Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Elefante africano",
    difficulty: "easy",
    incorrect_answers: [
      "Baleia Azul",
      "Dinossauro",
      "Girafa",
    ],
    question:
      "Qual o maior animal terrestre?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Margaret Thatcher",
    difficulty: "hard",
    incorrect_answers: [
      "Angela Merkel",
      "Hillary Clinton",
      "Christine Lagarde",
    ],
    question:
      "Que líder mundial ficou conhecida como “Dama de Ferro”?",
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

// console.log(questions.length);

export default getPersonalQuestions;
