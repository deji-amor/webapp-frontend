import { parseISO, format } from "date-fns";

export const formatDateAndTime = (inputDateString) => {
	// Parse the input date string
	const inputDate = parseISO(inputDateString);

	// Set the desired date (14th August 2023)
	const desiredDate = new Date(2023, 7, 14); // Note: Months are 0-indexed, so 7 corresponds to August

	// Set the desired time (10:45am)
	const desiredTime = new Date(0); // Create a new date object with zero timestamp
	desiredTime.setHours(10, 45, 0); // Set hours, minutes, and seconds

	// Set the date and time components of the input date to the desired values
	inputDate.setFullYear(desiredDate.getFullYear());
	inputDate.setMonth(desiredDate.getMonth());
	inputDate.setDate(desiredDate.getDate());
	inputDate.setHours(desiredTime.getHours());
	inputDate.setMinutes(desiredTime.getMinutes());
	inputDate.setSeconds(desiredTime.getSeconds());

	// Format the result as an object
	const result = {
		date: format(inputDate, "do MMMM yyyy"), // Format as '14th August 2023'
		time: format(inputDate, "hh:mm a"), // Format as '10:45 AM'
	};

	return result;
}

// Example usage
const inputDateString = "2024-01-03T11:14:53.000Z";
const formattedResult = formatDateAndTime(inputDateString);
console.log(formattedResult);
