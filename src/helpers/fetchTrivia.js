export async function getToken() {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const token = await response.json();
  return token.token;
}

export async function getQuestions(token, amount) {
  const url = `https://opentdb.com/api.php?amount=${amount}&token=${token}`;
  const response = await fetch(url);
  const questions = await response.json();
  return questions.results;
}
