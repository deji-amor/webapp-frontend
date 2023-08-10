import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";
import S3 from "react-aws-s3";
// import { awsconfig } from "../../../config/awsconfig";

// export const awsUpload = async ({file, fileName, dirName}) => {
// 	try {
// 		awsconfig.dirName = dirName;

// 		const ReactS3Client = new S3(awsconfig);
// 		console.log(awsconfig, ReactS3Client)

// 		// const result = await ReactS3Client.uploadFile(file, fileName);

// 		// return result;
// 		return null
// 	} catch (error) {
// 		console.log("error", error);
// 	}
// };

export const createTicket = createAsyncThunk("ticket", async (args, {rejectWithValue}) => {

	try {
		const token = await getAuthToken();
		if(args.scopeOfWorkDocument){
			const {scopeOfWorkDocument} = args
			console.log("has document")
			// awsUpload()
		}else {
			console.log("has no document")
		}

		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/users`;
		const response = await fetch(url, config);
		const result = await response.json();
		return result;
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

function getTodayAndTomorrow() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);

	function formatDate(date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		return `${year}-${month}-${day}T${hours}:${minutes}`;
	}

	return {
		today: formatDate(today),
		tomorrow: formatDate(tomorrow),
	};
}

const addressItem = {address: "", type: "government"}
const addressList = [addressItem]

export const allRequiredFields = {
	customerId: "",
	pointOfContactName: "",
	pointOfContactPhoneNumber: "",
	pointOfContactAddress: "",
	numberOfTechnicians: "1",
	scopeOfWorkDescription: "",
	scopeOfWorkDocument: null,
	scopeOfWorkDocumentUrl: "",
	startDateTime: getTodayAndTomorrow().today,
	endDateTime: getTodayAndTomorrow().tomorrow,
	hardwareComponentTypeList: [],
	hardwareComponentTypeQuantityValue: "1",
	hardwareComponentTypeQuantityName: "",
	softwareInstallationQuantity: "1",
	softwareInstallationName: "",
	softwareCustomizationQuantity: "1",
	softwareCustomizationName: "",
	numberOfWorkstation: "1",
	numberOfWorkSystem: "1",
	locations: addressList,
	numberOfLocation: addressList.length,
	pickLocations: addressList,
	numberOfPickLocation: addressList.length,
	dropOffLocations: addressList,
	numberOfDropLocation: addressList.length,
	materialsDescription: "",
	additionalFields: [],
};

const allPossibleFields = {
	...allRequiredFields,
		// POINT OF CONTACT NAME
		
		"pointOfContactNameIsTouched": false,
		"pointOfContactNameIsValid": false,
		"pointOfContactNameHasError": false,
		// POINT OF CONTACT PHONE NUMBER
		
		"pointOfContactPhoneNumberIsTouched": false,
		"pointOfContactPhoneNumberIsValid": false,
		"pointOfContactPhoneNumberHasError": false,
		// POINT OF CONTACT ADDRESS
		
		"pointOfContactAddressIsTouched": false,
		"pointOfContactAddressIsValid": false,
		"pointOfContactAddressHasError": false,
		// NUMBER OF TECHNICIANS
		
		// SCOPE OF WORK
		
		"scopeOfWorkDescriptionIsTouched": "",
		"scopeOfWorkDescriptionIsValid": "",
		"scopeOfWorkDescriptionHasError": "",
		
		"scopeOfWorkDocumentIsValid": false, // might not be need for this
		// DURATION

		//HARDWARE COMPONENT TYPE
		"hardwareInputTypeCurrentValue": "",
		"hardwareInputTypeCurrentValueIsValid": "",
		"hardwareInputTypeCurrentValueIsTouched": "",
		"hardwareInputTypeCurrentValueIsHasError": "",
		
		"hardwareComponentTypeListIsValid": "",
		//HARDWARE COMPONENT QUANTITY
		
		
		"hardwareComponentTypeQuantityNameIsValid": "",
		"hardwareComponentTypeQuantityNameIsTouched": "",
		"hardwareComponentTypeQuantityNameHasError": "",
		//SOFTWARE INSTALLATION

		"softwareInstallationNameIsValid": "",
		"softwareInstallationNameIsTouched": "",
		"softwareInstallationNameHasError": "",
		//SOFTWARE CUSTOMIZATION

		"softwareCustomizationNameIsValid": "",
		"softwareCustomizationNameIsTouched": "",
		"softwareCustomizationNameHasError": "",
		// WORKSTATION
		
		// WORK SYSTEM
		
		//LOCATION
		
		
		"locationsAddressIsValid": false,
		"activeLocationAddress": 0, // ZERO INDEX BASED
		"activeLocationType": 0, // ZERO INDEX BASED
		"locationAddress": "",
		"locationType": "government",
		"locationAddressIsValid": "",
		"locationAddressIsTouched": "",
		"locationAddressHasError": "",
		//PICk UP LOCATION
		
		
		"pickLocationsAddressIsValid": false,
		"activePickLocationAddress": 0, // ZERO INDEX BASED
		"activePickLocationType": 0, // ZERO INDEX BASED
		"pickLocationAddress": "",
		"pickLocationType": "government",
		"pickLocationAddressIsValid": "",
		"pickLocationAddressIsTouched": "",
		"pickLocationAddressHasError": "",
		//DROP OFF LOCATION
		
		
		"dropOffLocationsAddressIsValid": false,
		"activeDropOffLocationAddress": 0, // ZERO INDEX BASED
		"activeDropOffLocationType": 0, // ZERO INDEX BASED
		"dropOffLocationAddress": "",
		"dropOffLocationType": "government",
		"dropOffLocationAddressIsValid": "",
		"dropOffLocationAddressIsTouched": "",
		"dropOffLocationAddressHasError": "",
		// MATERIALS PROCUREMENT
		
		"materialsDescriptionIsTouched": "",
		"materialsDescriptionIsValid": "",
		"materialsDescriptionHasError": "",
		// EXTRA FIELDS
		"extraFieldNameInputTypeCurrentValue": "",
		"extraFieldNameInputTypeCurrentValueIsValid": "",
		"extraFieldNameInputTypeCurrentValueIsTouched": "",
		"extraFieldNameInputTypeCurrentValueIsHasError": "",
		"extraFieldValueInputTypeCurrentValue": "",
		"extraFieldValueInputTypeCurrentValueIsValid": "",
		"extraFieldValueInputTypeCurrentValueIsTouched": "",
		"extraFieldValueInputTypeCurrentValueIsHasError": "",
		
		"additionalFieldsIsValid": true,
}

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	showAddTicketModal: false,
	showTemplateModal: false,
	pathToTemplate: [],
  showServiceRequestsTab: true,
  showProjectsTab: false,
	level: 0,
	mode: "creation",
	chosenTemplate: [],
	allPossibleFields: allPossibleFields
};

const createTicketSlice = createSlice({
	name: "createTicket",
	initialState: initialState,
	reducers: {
		toggleAddTicketModal: (state, action) => {
			// state.showAddTicketModal = !state.showAddTicketModal;
			return initialState
		},
		toggleTemplateModal: (state, action) => {
			// state.showTemplateModal = !state.showTemplateModal;
			return initialState
		},
		changeAnyState: (state, action) => {
			const {key, value} = action.payload;
			state[key] = value;
		},
		changeMultipleState: (state, action) => {
			const array = action.payload;
			array.forEach(({key, value}) => {
				state[key] = value;
			});
		},
		goToTicketTemplateForm: (state, action) => {
			state.chosenTemplate = action.payload;
			state.showAddTicketModal = false;
			state.showTemplateModal = true;
		},
		goBackToAddTicketModal: (state, action) => {
			state.chosenTemplate = [];
			state.showAddTicketModal = true;
			state.showTemplateModal = false;
			state.pathToTemplate = [];
			const customerId = current(state).allPossibleFields.customerId
			state.allPossibleFields = {...allPossibleFields, customerId};
		},
		updateField: (state, action) => {
			const payload = action.payload;

			if (Array.isArray(payload)) {
				payload.forEach(({key, value}) => {
					state.allPossibleFields[key] = value;
				});
			} else {
				const {key, value} = payload;
				state.allPossibleFields[key] = value;
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createTicket.pending, (state, action) => {})
			.addCase(createTicket.fulfilled, (state, action) => {})
			.addCase(createTicket.rejected, (state, action) => {});
	},
});

export default createTicketSlice.reducer;
export const createTicketActions = createTicketSlice.actions;
