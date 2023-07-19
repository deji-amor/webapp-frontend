import { FormControl, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";

const SelectFields = (name, errors) => {
	const [location, setLocation] = useState({ country: "", state: "" });
	const [countryStates, setCountryStates] = useState([]);

	const { country, state } = location;

	const countryList = [
		{ code: "US", name: "United States" },
		{ code: "CA", name: "Canada" },
		{ code: "MX", name: "Mexico" },
	];

	const handleChange = (event) => {
		setLocation({ ...location, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		if (country) {
			const countryStates = fetchStatesForCountry(country);
			setCountryStates(countryStates);
		}
	}, [country]);

	const fetchStatesForCountry = (country) => {
		const stateData = {
			US: ["California", "New York", "Texas"],
			CA: ["Ontario", "Quebec", "British Columbia"],
			MX: ["Jalisco", "Quintana Roo", "Nuevo León"],
		};

		return stateData[country] || [];
	};

	return (
		<FormControl
			fullWidth
			sx={{
				mb: "0.5rem",
				color: "#4F4F4F",
				fontSize: "14px",
				"& .MuiOutlinedInput-root": {
					borderRadius: "6px",
				},
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: "#EEEEEE",
					borderWidth: "1px",
					borderStyle: "solid",
				},
				"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
					borderColor: "#2B2E72",
				},
				"& .MuiOutlinedInput-input": {
					color: "#828282",
				},
			}}
		>
			<TextField
				{...addErrorIntoField(errors[name])}
				select
				name="country"
				value={country}
				onChange={handleChange}
				label="Country"
				style={{ marginBottom: "10px" }}
				InputLabelProps={{
					style: { color: "#898989" },
				}}
			>
				{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}

				<MenuItem value="">Select Country</MenuItem>
				{countryList.map((country) => (
					<MenuItem key={country.code} value={country.code}>
						{country.name}
					</MenuItem>
				))}
			</TextField>

			{country && (
				<TextField
					select
					name="state"
					value={state}
					onChange={handleChange}
					fullWidth
					label="State"
					InputLabelProps={{
						style: { color: "#898989" },
					}}
				>
					<MenuItem value="">Select State</MenuItem>
					{countryStates.map((state) => (
						<MenuItem key={state} value={state}>
							{state}
						</MenuItem>
					))}
				</TextField>
			)}
		</FormControl>
	);
};

export default SelectFields;
