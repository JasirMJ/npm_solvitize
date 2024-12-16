// validation.js

/**
 * Validates a username.
 * @param {string} username - The username to validate.
 * @returns {boolean} - Returns true if valid, otherwise false.
 */
function validateUsername(username) {
  // Username must be between 3 and 20 characters long and only contain alphanumeric characters
  const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
  return usernamePattern.test(username);
}

/**
 * Validates a password.
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns true if valid, otherwise false.
 */
function validatePassword(password) {
  return /^.{3,20}$/.test(password);
  // Password must be between 8 and 32 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character
  // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
  // return passwordPattern.test(password);
}

function validateServerUrl(serverUrl) {
  return /^https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(
    serverUrl
  );
}

function validateMobileNumber(mobileNumber) {
  return /^[0-9]{10}$/.test(mobileNumber);
}
function preventNonNumeric(text) {
  return text.replace(/[^0-9]/g, '');
}

function preventNonAlphanumeric(name) {
  return name.replace(/[^A-Za-z' -.,]/g, '');
}

function preventnFirstWhiteSpace(text) {
  return text.replace(/^\s+/, ''); // Remove leading whitespace
}

function validateName(name) {
  return /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/.test(name);
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function emailValidator(email) {
  return email
    .replace(/^\s+|\s+$/g, '') // Remove leading and trailing whitespace
    .replace(/[^a-zA-Z0-9._%+-@]/g, ''); // Remove invalid characters
}

function isValidDate(day, month, year) {
  if (day === '' || month === '' || year === '') return false;
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (
    dayNum < 1 ||
    dayNum > 31 ||
    monthNum < 1 ||
    monthNum > 12 ||
    yearNum < 1900 ||
    yearNum > new Date().getFullYear()
  ) {
    return false;
  }

  const date = new Date(yearNum, monthNum - 1, dayNum);
  return (
    date.getDate() === dayNum && date.getMonth() === monthNum - 1 && date.getFullYear() === yearNum
  );
}
module.exports = {
  validateUsername,
  validatePassword,
  validateServerUrl,
  validateMobileNumber,
  preventNonNumeric,
  preventNonAlphanumeric,
  validateName,
  emailValidator,
  validateEmail,
  isValidDate,
  preventnFirstWhiteSpace,
};
