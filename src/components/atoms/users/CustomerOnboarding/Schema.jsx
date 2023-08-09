import * as yup from "yup";

export const schema = yup.object({
	companyName: yup.string().required("Company Name is required"),
	companyRepFirstName: yup.string().required("Company Representative First Name is required"),
	companyRepLastName: yup.string().required("Company Representative Last Name is required"),
	companyRepEmail: yup.string().required("Company Representative Email is required").email(),
	companyFinanceEmail: yup.string(),
	companyOfficialEmail: yup.string(),
	companyRepPhoneNumber: yup.string(),
});
