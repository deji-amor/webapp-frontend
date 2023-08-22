import * as yup from "yup";
import { phoneRegExp } from "../../../utilis";

export const schema = yup.object({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	workspaceName: yup.string().required("Workspace Name is required"),
	companyEmail: yup.string().required("Company Email is required").email(),
	phoneNumber: yup
		.string()
		.required("Phone Number is required")
		.matches(phoneRegExp, "Phone number is not valid"),
	country: yup.string().required("Country is required"),
	city: yup.string().required("State is required"),
	// password: yup
	// 	.string()
	// 	.required("Password is required")
	// 	.matches(
	// 		pawdRegExp,
	// 		"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
	// 	),
	// confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match"),
	// privacy: yup.bool().oneOf([true], "Field must be checked"),
});
