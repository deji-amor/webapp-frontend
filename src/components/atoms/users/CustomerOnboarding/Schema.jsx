import * as yup from "yup";

export const schema = yup.object({
	companyName: yup.string().required("Company Name is required"),
	representativeFirstName: yup.string().required("Company Representative First Name is required"),
	representativeLastName: yup.string().required("Company Representative Last Name is required"),
	representativeEmail: yup.string().required("Company Representative Email is required").email(),
	companyFinanceEmail: yup.string(),
	companyEmail: yup.string(),
	representativePhoneNumber: yup.string(),
});
