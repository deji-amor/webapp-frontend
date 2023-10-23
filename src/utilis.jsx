import localforage from "localforage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const addErrorIntoField = (errors) => (errors ? { error: true } : { error: false });
export const phoneRegExp = /^(?:\+?\d{1,3}\s?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
export const pawdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const removeAuthToken = async () => {
	try {
		await localforage.removeItem("authToken");
		return true;
	} catch (error) {
		return false;
	}
};

export const getAuthToken = async () => {
	try {
		const t = await localforage.getItem("authToken");
		return t;
	} catch (error) {
		return null;
	}
};

export const getDeviceName = () => {
	const userAgent = navigator.userAgent;
	const deviceNameRegex = /\(([^)]+)\)/; // Matches the text inside parentheses in the user agent

	const matches = userAgent.match(deviceNameRegex);
	if (matches && matches.length >= 2) {
		const deviceName = matches[1];
		return deviceName;
	} else {
		return "Unknown"; // Return a default value if device name cannot be determined
	}
};

export const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const checkToken = async () => {
			const token = await getAuthToken();

			if (!token) {
				navigate("/");
			}
		};

		checkToken();
	}, [navigate]);

	return children;
};

// 