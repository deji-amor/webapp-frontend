import React from "react";
import PropTypes from "prop-types"
import { Checkbox, FormControlLabel, FormControl } from "@mui/material";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";

const CheckboxFields = ({ checkedError, checked, control, name, onClick }) => {

	return (
		<>
			<FormControl>
				<FormControlLabel
					control={
						<Checkbox
							name={name}
							onClick={onClick}
							inputProps={{ "aria-label": "checkbox" }}
							required
							style={{ color: "#2B2E72" }}
							checked={checked}
							{...control}
						/>
					}
					label={
						<>
							I agree to the&nbsp;
							<a
								href="/terms-and-conditions"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#2B2E72",
									textDecoration: "none",
									fontWeight: "700",
									fontStyle: "normal",
								}}
							>
								Terms and Conditions
							</a>
							, and our&nbsp;
							<a
								href="/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#2B2E72",
									textDecoration: "none",
									fontWeight: "700",
									fontStyle: "normal",
								}}
							>
								Privacy Policy
							</a>
						</>
					}
				/>
				{checkedError && <ErrorMessage message="Field must be checked" />}
			</FormControl>
		</>
	);
};

CheckboxFields.propTypes = {
	checkedError: PropTypes.bool,
	checked: PropTypes.bool,
	control: PropTypes.object,
	name: PropTypes.string,
	onClick: PropTypes.func
}

export default CheckboxFields;
