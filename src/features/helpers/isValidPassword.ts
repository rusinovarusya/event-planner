export const isValidPassword = (password: string) => {
  const regexSpecialSymbols = /[.,:;?!*+%\-<>@[\]{}/\\_$#]/g;
  if (password.length < 8 || password.length > 32) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (!regexSpecialSymbols.test(password)) {
    return false;
  }
  if (/\W/.test(password.replaceAll(regexSpecialSymbols, ''))) {
    return false;
  }
  return true;
}


export const passwordFormatErrorMessage = 'Используйте от 8 до 32 символов: строчные и прописные латинские буквы (A-z), цифры (0-9) и спецсимволы ( . , : ; ? ! * + % - < > @ [] { } / \\ _ {} $ # )';
