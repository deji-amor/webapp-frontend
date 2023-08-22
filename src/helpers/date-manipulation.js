export function getDateFromDateTime(dateString) {
	const dateObject = new Date(dateString);
	const year = dateObject.getFullYear();
	const month = dateObject.getMonth() + 1; // Months are zero-based
	const day = dateObject.getDate();

	return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}
