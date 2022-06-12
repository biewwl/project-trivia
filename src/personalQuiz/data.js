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
    correct_answer: "Substantivo, verbo e preposição",
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
      "Como é a conjugação do verbo caber na 1ª pessoa do singular do presente do indicativo?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Gonorreia, clamídia e sífilis",
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
  {
    category: "Entretenimento",
    correct_answer: "Muito Barulho por Nada (2012)",
    difficulty: "hard",
    incorrect_answers: [
      "Capitães de Areia (2011)",
      "A Dama das Camélias (1936)",
      "A Revolução dos Bichos (1954)",
    ],
    question:
      "Qual desses filmes foi baseado na obra de Shakespeare?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Neil Armstrong",
    difficulty: "easy",
    incorrect_answers: [
      "Yuri Gagarin",
      "Charles Duke",
      "Charles Conrad",
    ],
    question:
      "Quem foi o primeiro homem a pisar na Lua?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Tipo O",
    difficulty: "easy",
    incorrect_answers: [
      "Tipo A",
      "Tipo AB",
      " Tipo B",
    ],
    question:
      "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Os Y",
    difficulty: "medium",
    incorrect_answers: [
      "Os X",
      "Os V",
      "Os W",
    ],
    question:
      "Quais são os cromossomos que determinam o sexo masculino?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Nova Gales do Sul",
    difficulty: "medium",
    incorrect_answers: [
      "Victoria",
      "Tasmânia",
      "Queensland",
    ],
    question:
      "Em que estado australiano fica situada a cidade de Sydney?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "O escotismo",
    difficulty: "hard",
    incorrect_answers: [
      "O clube dos aventureiros",
      "A associação juvenil",
      "A Organização mundial da juventude",
    ],
    question:
      "Que organização juvenil foi fundado por Baden-Powell?",
    type: "multiple",
  },
  {
    category: "Hitória",
    correct_answer: "Uma loba",
    difficulty: "easy",
    incorrect_answers: [
      "Uma vaca",
      "Uma ovelha",
      "Uma cabra",
    ],
    question:
      "Quem amamentou os gêmeos Rômulo e Remo?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Colômbia e Peru",
    difficulty: "medium",
    incorrect_answers: [
      "Colômbia e Venezuela",
      "Brasil e Colômbia",
      "Peru e Equador",
    ],
    question:
      "Que países fazem fronteira com o Equador?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Peru",
    difficulty: "easy",
    incorrect_answers: [
      "Pavão",
      "Urubu",
      "Cacatua",
    ],
    question:
      "Que animal gruguleja?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Indonésia",
    difficulty: "medium",
    incorrect_answers: [
      "Bahamas",
      "Finlândia",
      "Maldivas",
    ],
    question:
      "Qual é o maior arquipélago da Terra?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "Oceano Índico",
    difficulty: "medium",
    incorrect_answers: [
      "Oceano Antártico",
      "Oceano Atlântico",
      "Oceano Pacífico",
    ],
    question:
      "Em que oceano fica Madagascar?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Marcel Duchamp",
    difficulty: "hard",
    incorrect_answers: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Van Gogh",
    ],
    question:
      "Que artista é conhecido como um dos expoentes máximos do Ready-Mades?",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Ouro",
    difficulty: "easy",
    incorrect_answers: [
      "Alumínio",
      "Arsênio",
      "Prata",
    ],
    question:
      "Qual o metal cujo símbolo químico é o Au?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "No século XIV",
    difficulty: "hard",
    incorrect_answers: [
      "No século X",
      "No século XI",
      "No século XIII",
    ],
    question:
      "Em que século o continente europeu foi devastado pela peste bubônica?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "Matusalém",
    difficulty: "easy",
    incorrect_answers: [
      "Jesus Cristo",
      "Noé",
      "Benjamim",
    ],
    question:
      "Quem viveu, segundo a Bíblia, 969 anos?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Michelangelo",
    difficulty: "hard",
    incorrect_answers: [
      "Leonardo da Vinci",
      "Rafael",
      "Sandro Botticelli",
    ],
    question:
      "Quem pintou o teto da capela sistina?",
    type: "multiple",
  },
  {
    category: "Matemática",
    correct_answer: "90",
    difficulty: "easy",
    incorrect_answers: [
      "45",
      "180",
      "360",
    ],
    question:
      "Quantos graus são necessários para que dois ângulos sejam complementares?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Ésquilo",
    difficulty: "medium",
    incorrect_answers: [
      "Homero",
      "Eurípedes",
      "Plutarco",
    ],
    question:
      "Quem foi o criador da tragédia grega?",
    type: "multiple",
  },
  {
    category: "Entretenimento",
    correct_answer: "The Doors",
    difficulty: "medium",
    incorrect_answers: [
      "The Police",
      "Pink Floyd",
      "Nirvana",
    ],
    question:
      "Jim Morrison era vocalista de que grupo?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Cristo Redentor",
    difficulty: "easy",
    incorrect_answers: [
      "Elevador Lacerda",
      "Estação da Luz",
      "Palácio da Alvorada",
    ],
    question:
      "Qual destas obras arquitetônicas brasileiras é uma das Sete Maravilhas do Mundo Moderno?",
    type: "multiple",
  },
  {
    category: "História",
    correct_answer: "1891, Deodoro da Fonseca",
    difficulty: "hard",
    incorrect_answers: [
      "1890, Floriano Peixoto",
      "1889, Hermes da Fonseca",
      " 1930, Getúlio Vargas",
    ],
    question:
      "Em que ano e quem foi eleito o primeiro presidente do Brasil?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Tarsila do Amaral",
    difficulty: "easy",
    incorrect_answers: [
      "Di Cavalcanti",
      "Anita Malfatti",
      "Candido Potinari",
    ],
    question:
      "As obras Abaporu, Operários e Antropofagia foram pintadas por qual artista brasileiro?",
    type: "multiple",
  },
  {
    category: "Artes",
    correct_answer: "Ucrânia",
    difficulty: "hard",
    incorrect_answers: [
      "Portugal",
      "França",
      "Rússia",
    ],
    question:
      "Em que país nasceu Clarice Lispector?",
    type: "multiple",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "não se olha os dentes",
    difficulty: "easy",
    incorrect_answers: [
      "sai caro",
      "tem medo de água fria",
      "não se olha o rabo",
    ],
    question:
      "Complete o provérbio “Cavalo dado …”",
    type: "multiple",
  },
  {
    category: "Ciências",
    correct_answer: "Laringe e traqueia",
    difficulty: "easy",
    incorrect_answers: [
      "Pulmões e faringe",
      "Esôfago e brônquios",
      "Tireoide e hipófise",
    ],
    question:
      "Quais dos órgãos abaixo pertencem ao sistema respiratório?",
    type: "multiple",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "Pessoa que pratica a caridade",
    difficulty: "medium",
    incorrect_answers: [
      "Pessoa que tem excesso de confiança",
      "Pessoa egoísta",
      "Poema de quatro versos",
    ],
    question:
      "O que é filantropo?",
    type: "multiple",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "Austrália é o único país que vivem os coalas",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "A Amazônia é a floresta tropical mais extensa do mundo",
    type: "boolean",
  },
  {
    category: "Entretenimento",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "As lutas de judô são disputadas no tablado",
    type: "boolean",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Unigênito é o nome dado ao último filho de um casal",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O nome do oceano atlântico vem de Atlas, o deus grego, filho de Netuno o deus dos mares",
    type: "boolean",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "False",
    difficulty: "medium",
    incorrect_answers: [
      "True",
    ],
    question:
      "Cabra é usado para machos e fêmeas",
    type: "boolean",
  },
  {
    category: "Matemática",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Um quilometro equivale a 1000 metros",
    type: "boolean",
  },
  {
    category: "Língua Portuguesa",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Um ano bissexto tem 364 dias",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "Salvador já foi capital do Brasil",
    type: "boolean",
  },
  {
    category: "Entretenimento",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Antes de ser narrador de futebol, Galvão Bueno foi jogador",
    type: "boolean",
  },
  {
    category: "Ciências",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "A gelatina é feita de ossos, ligamentos, tecidos de vacas e porco principalmente",
    type: "boolean",
  },
  {
    category: "Ciências",
    correct_answer: "False",
    difficulty: "medium",
    incorrect_answers: [
      "True",
    ],
    question:
      "Nem todo quadrado é um retângulo",
    type: "boolean",
  },
  {
    category: "Matemática",
    correct_answer: "True",
    difficulty: "hard",
    incorrect_answers: [
      "False",
    ],
    question:
      "2 + 2, 2x2 e 2² têm o mesmo resultado",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "O Brasil tem um sistema de governo parlamentarista",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O mosquito é o animal que mata mais humanos por ano",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Oceano Atlântico é o maior oceano do mundo",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Júpiter é o maior planeta do sistema solar",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "Tonga é um país da África",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "hard",
    incorrect_answers: [
      "False",
    ],
    question:
      "A África está localizada nos quatro hemisférios terrestres (Hemisférios Norte, Sul, Ocidental e Oriental)",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "hard",
    incorrect_answers: [
      "False",
    ],
    question:
      "O Brasil faz fronteira com um membro da União Europeia",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "hard",
    incorrect_answers: [
      "True",
    ],
    question:
      "Porto Rico é um país",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "medium",
    incorrect_answers: [
      "True",
    ],
    question:
      "Quem nasce em Estocolmo, capital da Suécia é estocolmiense",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "República da China é o nome oficial de Taiwan",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "medium",
    incorrect_answers: [
      "True",
    ],
    question:
      "A Rússia é maior que a América do Norte",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O Vaticano é mais povoado que a China",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O Bahia é considerado o primeiro campeão brasileiro da história",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O Sport enfrentou o Real Madrid na inauguração da iluminação noturna do estádio Santiago Bernabéu",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Brasil foi o país que criou o futebol",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "False",
    difficulty: "hard",
    incorrect_answers: [
      "True",
    ],
    question:
      "27 milhas é a distância de uma maratona",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "hard",
    incorrect_answers: [
      "False",
    ],
    question:
      "Michael Jordan ganhou 6 campeonatos pelo Chicago Bulls",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "False",
    difficulty: "hard",
    incorrect_answers: [
      "True",
    ],
    question:
      "Manny Pacquiao é um boxeador lendário dos EUA",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Lionel Messi é o maior campeão da Bola de Ouro, do Melhor do Mundo da FIFA e da Chuteira de Ouro",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Lionel Messi é o maior campeão da Bola de Ouro, do Melhor do Mundo da FIFA e da Chuteira de Ouro",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "Liverpool ganhou a Liga dos Campeões de 2022",
    type: "boolean",
  },
  {
    category: "Ciências",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "O recorde de filhos que uma mulher deu à luz é de 69 filhos",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "O Beto Carrero World é o maior parque temático do mundo",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "A maior estátua do mundo possui 182m e está localizada na Índia",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "hard",
    incorrect_answers: [
      "True",
    ],
    question:
      "A maior rua do mundo possui 58km",
    type: "boolean",
  },
  {
    category: "Geografia",
    correct_answer: "False",
    difficulty: "easy",
    incorrect_answers: [
      "True",
    ],
    question:
      "A torre Pisa é a torre mais inclinada do mundo",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "Michael Phelps é o maior ganhador de medalhas nos Jogos Olímpicos",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "medium",
    incorrect_answers: [
      "False",
    ],
    question:
      "Anderson Silva é o maior defensor do cinturão no UFC",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "False",
    difficulty: "hard",
    incorrect_answers: [
      "True",
    ],
    question:
      "Curry é o jogador com o maior número de pontos em uma única partida de basquete",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Cristiano Ronaldo é o maior artilheiro do mundo em todos os tempos do futebol",
    type: "boolean",
  },
  {
    category: "Esportes",
    correct_answer: "True",
    difficulty: "easy",
    incorrect_answers: [
      "False",
    ],
    question:
      "Lionel Messi não é o único jogador a marcar mais de 40 gols em 10 temporadas consecutivas",
    type: "boolean",
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
