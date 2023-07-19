import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

const CheckboxFields = ({ name, errors, control }) => {
	const checkboxStyle = {
		color: "#7F56D9",
		background: "#F9F5FF",
		"&.Mui-checked": {
			color: "#7F56D9",
		},
	};

	const labelStyle = {
		fontWeight: "bold",
		color: "#4F4F4F",
	};
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<FormControlLabel control={<Checkbox {...field} style={checkboxStyle} />} />
				)}
			/>
		</>
	);
};

export default CheckboxFields;
