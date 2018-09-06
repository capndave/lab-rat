export function hasLowerCase(str) {
  return /[a-z]/.test(str)
}

export function hasUpperCase(str) {
  return /[A-Z]/.test(str)
}

export function hasSpecialChar(str) {
  return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str)
}
