const usernamePattern = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])[a-zA-Z0-9!@#]{4,80}$/
);
const namePattern = new RegExp(/^[a-zA-Z\']{2,80}$/);
const phonePattern = new RegExp(
  /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/
);

const validateUsername = (username: string) => usernamePattern.test(username);
const validatePhone = (phone: string) => phonePattern.test(phone);
const validateName = (name: string) => phonePattern.test(name);

export {
  usernamePattern,
  namePattern,
  phonePattern,
  validateName,
  validateUsername,
  validatePhone,
};
