const usernamePattern = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])[a-zA-Z0-9!@#]{4,80}$/
);
const namePattern = new RegExp(/^[a-zA-Z\']{2,80}$/);
/*
 * phone regex with country code, exemples of valid phone numbers:
 * (123) 456-7890
 * (123)456-7890
 * 123.456.7890
 * 1234567890
 * +34123456789
 * +10123456789
 * +40721234567
 * 072-2345782
 * 0721234567
 */
const phonePattern = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
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
