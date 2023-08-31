import PropTypes from "prop-types";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const useNotifications = (userId = 14, workspaceId = 68) => {
	const backendUrl = import.meta.env.VITE_BASE_BACKEND_URL;
	console.log(backendUrl);
	const socket = io.connect(backendUrl, { secure: true });
  const [notifications, setNotifications] = []

	useEffect(() => {
		console.log(userId, workspaceId);
		socket.on("connect", () => {
			socket.emit("join-workspace", `workspace_${workspaceId}`, userId);
			console.log("iyff8f8");
			socket.on("get-notifications", (notifications) => {
				console.log(notifications); // []
			});

			socket.on("updated-notifications", (notifications) => {
				// listen to get updated notification in case there is new notification

				console.log(notifications);
			});
		});

		return () => {
			socket.emit("leave-workspace", `workspace_${workspaceId}`);
			socket.disconnect();
		};
	}, [socket]);

	// a function to mark a notification as read

	// const handleUpdateNotification = (notificationId) => {
	// 	socket.emit("read-notification", notificationId);
	// };

	return (
		<></>
		// <div className="App">
		// 	<button onClick={() => handleUpdateNotification(40)}>Read Notification</button>
		// </div>
	);
};

export default useNotifications;
