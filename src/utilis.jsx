import localforage from "localforage";

export const addErrorIntoField = (errors) => (errors ? { error: true } : { error: false });
export const phoneRegExp =
	/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const pawdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const removeAuthToken = () => {
	localforage
		.removeItem("authToken")
		.then(() => {
			console.log("Token removed successfully!");
		})
		.catch((error) => {
			console.error("Error removing token:", error);
		});
};

export const getAuthToken = async () => {
	try {
		const t = await localforage.getItem("authToken")
		return t
	} catch (error) {
		return null
	}
}