export function isValidEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // RETURN
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

export function isFieldNameEmpty(value) {
  if(value.trim().length === 0) return [false, "Field name can not be empty"]
  else return [true, ""]
}

export function isFieldValueEmpty(value) {
  if(value.trim().length === 0) return [false, "Field value can not be empty"]
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

export function isValidFile(file) {
	// Check if the object is a file
	if (!(file instanceof File)) {
		return false;
	}

	// Validate if the file has a valid name and extension (optional but recommended)
	const filename = file.name.trim();
	if (filename === "") {
		return false;
	}

	// Ensure that the file has content (not empty)
	if (file.size === 0) {
		return false;
	}

	return true;
}

export function isValidDateTimeLocal(inputString) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

  if (!regex.test(inputString)) {
    return [false, "Invalid format. The format should be 'YYYY-MM-DDTHH:mm'."];
  }

  const [datePart, timePart] = inputString.split('T');
  const [year, month, day] = datePart.split('-');
  const [hours, minutes] = timePart.split(':');

  const dateObj = new Date(year, month - 1, day, hours, minutes);
  const yearValid = dateObj.getFullYear() == year;
  const monthValid = dateObj.getMonth() + 1 == month;
  const dayValid = dateObj.getDate() == day;
  const hoursValid = dateObj.getHours() == hours;
  const minutesValid = dateObj.getMinutes() == minutes;

  if (!(yearValid && monthValid && dayValid && hoursValid && minutesValid)) {
    return [false, "Invalid date or time values."];
  }

  return [true, null];
}

export function isHardwareTypeValid(value) {
	if (value.trim().length === 0) return [false, "Hardware type can not be empty"];
	else return [true, ""];
}

export function isHardwareQuantityValid(value) {
	if (value.trim().length === 0) return [false, "Hardware quantity can not be empty"];
	else return [true, ""];
}

// // Example usage:
// DATES
// const dateString1 = "2023-08-04T12:00";
// const dateString2 = "2023-13-04T25:00"; // Invalid date or time values
// const dateString3 = "2023-08-04T12:001"; // Invalid format
// const dateString4 = "2023-02-31T12:00"; // Invalid date or time values
// console.log(isValidDateTimeLocal(dateString1)); // Output: [true, null]
// console.log(isValidDateTimeLocal(dateString2)); // Output: [false, "Invalid date or time values."]
// console.log(isValidDateTimeLocal(dateString3)); // Output: [false, "Invalid format. The format should be 'YYYY-MM-DDTHH:mm'."]
// console.log(isValidDateTimeLocal(dateString4)); // Output: [false, "Invalid date or time values."]
