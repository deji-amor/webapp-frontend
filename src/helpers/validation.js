export function isValidEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // REGULAR return emailPattern.test(email);
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
  const filename = file.name.trim();
	if (!(file instanceof File)) {
		return false;
	}else if(filename === "") {
		return false;
	}else if (file.size === 0) {
		return false;
	}else {
    return true;
  }
}

export function isValidDateTimeLocal(inputString) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

  if (!regex.test(inputString)) {
    return [false, "Invalid format. The format should e.g '2022-07-05T04:32'."];
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