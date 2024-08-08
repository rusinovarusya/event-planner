export const prefix = 'rdclr';
export const key = `${prefix}-is-auth`;

export const logIn = () => {
  sessionStorage.setItem(key, 'true');
}

export const logOut = () => {
  sessionStorage.setItem(key, '');
}

export const isUserAuthorized = () => {
  return sessionStorage.getItem(key) === 'true';
}
