export function isValidEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // return emailPattern.test(email);
  if(email.trim().length === 0) return [false, "Email can not be empty"]
  if (!emailPattern.test(email)) {
    return [false, "Invalid email format"]
  } else {
    return [true, ""]
  }
}


export function isNotEmpty(value) {
  if(value.trim().length === 0) return [false, "Password can not be empty"]
  else return [true, ""]
}