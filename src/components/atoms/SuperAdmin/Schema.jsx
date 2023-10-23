import * as yup from "yup";
import { phoneRegExp } from "../../../utilis";

export const schema = yup.object({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	workspaceName: yup.string().required("Workspace Name is required"),
	companyEmail: yup.string().required("Work Email is required").email(),
	phoneNumber: yup
		.string()
		.required("Phone Number is required")
		.matches(phoneRegExp, "Phone number is not valid"),
	country: yup.string().required("Country is required"),
	city: yup.string().required("State is required"),
});
