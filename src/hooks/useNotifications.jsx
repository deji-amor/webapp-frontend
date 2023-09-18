import PropTypes from "prop-types";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { notificationsActions } from "../state-manager/reducers/notifications/notifications";
import { useDispatch, useSelector} from "react-redux";

const useNotifications = (userId, workspaceId) => {
	const {notifications: allNotifications} = useSelector(state => state.notifications)
	const dispatch = useDispatch()
	
	useEffect(() => {
		const backendUrl = import.meta.env.VITE_BASE_BACKEND_URL;
		const socket = io.connect(backendUrl, { secure: true, reconnect: true });

		socket.on("connect", () => {
			socket.emit("join-workspace", `workspace_${workspaceId}`, userId);
			socket.on("get-notifications", (notifications) => {
				console.log(console.log(notifications));
				const newNotifications = notifications.slice().map(notification => {
					const newNotification = {...notification}
					newNotification.handleUpdateNotification = () => {
						socket.emit("read-notification", notification.id);
					}
					return newNotification
				})
				dispatch(notificationsActions.updateField({ key: "notifications", value: newNotifications}))
			});

			socket.on("updated-notifications", (notifications) => {
				console.log(notifications);
				const newNotifications = notifications.slice().map((notification) => {
					const newNotification = { ...notification };
					newNotification.handleUpdateNotification = () => {
						socket.emit("read-notification", notification.id);
					};
					return newNotification;
				});
				dispatch(notificationsActions.updateField({ key: "notifications", value: newNotifications}))
			});
		});

		return () => {
			socket.emit("leave-workspace", `workspace_${workspaceId}`);
			socket.disconnect();
		};
	}, [userId, workspaceId, dispatch]);

	return allNotifications
};

export default useNotifications;
