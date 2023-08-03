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

export function isNameEmpty(value) {
	if (value.trim().length === 0) return [false, "Name can not be empty"];
	else return [true, ""];
}

export function isPhoneNumber(value) {
	// Regular expression to match numbers, dashes, and brackets
	const regex = /^[0-9\-()\[\]]{7,15}$/;

	// Test if the value matches the regex
	const isValid = regex.test(value);

	// Return an array with the validity and a reason if not valid
	return [isValid, isValid ? null : "Invalid format. Expected 7-15 digits, dashes, brackets."];
}

export function isAddressEmpty(value) {
	if (value.trim().length === 0) return [false, "Address can not be empty"];
	else return [true, ""];
}

export function isMaterialEmpty(value) {
	if (value.trim().length === 0) return [false, "Material can not be empty"];
	else return [true, ""];
}

export function isScopeOfWorkEmpty(value) {
	if (value.trim().length === 0) return [false, "Scope of Work can not be empty"];
	else return [true, ""];
}