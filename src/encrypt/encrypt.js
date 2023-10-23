import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key"; // Replace with your secret key

export function encrypt(text) {
	const ciphertext = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
	return ciphertext;
}

export function decrypt(ciphertext) {
	const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);
	return originalText;
}
