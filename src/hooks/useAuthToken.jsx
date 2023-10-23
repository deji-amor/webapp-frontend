import React, {useState, useEffect} from 'react'
import localforage from "localforage";

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(null);

	useEffect(() => {
		// Fetch the token from local storage when the component mounts
		localforage
			.getItem("authToken")
			.then((storedToken) => {
				setAuthToken(storedToken);
			})
			.catch((error) => {
				console.error("Error fetching token:", error);
			});
	}, []);

	return authToken;
}

export default useAuthToken