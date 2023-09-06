import PropTypes from "prop-types";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { notificationsActions } from "../state-manager/reducers/notifications/notifications";
import { useDispatch, useSelector} from "react-redux";

const useNotifications = (userId, workspaceId) => {
	const backendUrl = import.meta.env.VITE_BASE_BACKEND_URL;
	const socket = io.connect(backendUrl, { secure: true, reconnect: true });
	const dispatch = useDispatch()
	const {notifications: allNotifications} = useSelector(state => state.notifications)

	console.log(allNotifications);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("h7887g");
			socket.emit("join-workspace", `workspace_${workspaceId}`, userId);
			socket.on("get-notifications", (notifications) => {
				console.log(notifications); // []
				dispatch(notificationsActions.updateField({ key: "notifications", value: notifications}));
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
	}, [socket, userId, workspaceId, dispatch]);

	// a function to mark a notification as read
	const handleUpdateNotification = (notificationId) => {
		socket.emit("read-notification", notificationId);
	};

	return allNotifications
};

export default useNotifications;
