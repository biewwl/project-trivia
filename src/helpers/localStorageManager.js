function lS(method, key, value) {
  switch(method) {
    case 'g':
      return JSON.parse(localStorage.getItem(key));

    case 's':
      localStorage.setItem(key, JSON.stringify(value));
      break;

    case 'r':
      localStorage.removeItem(key);
      break;

    default:
      throw new Error('O método escolhido não corresponde a nenhum padrão desta função');
  }
}

export default lS;
