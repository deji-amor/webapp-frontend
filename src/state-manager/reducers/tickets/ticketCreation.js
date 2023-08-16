import React from "react";
import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";
// NOSONAR import { uploadImage } from "../../aws/aws-crud-operations"; 

export const createTicket = createAsyncThunk("ticket", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		// NOSONAR
		// if(args.scopeOfWorkDocument){
		// 	const {scopeOfWorkDocument} = args
		// 	const result = await uploadImage(scopeOfWorkDocument)
		// 	console.log(result)
		// 	const {Location: scopeOfWorkDocumentUrl} = result;
		// 	args.scopeOfWorkDocumentUrl = scopeOfWorkDocumentUrl;
		// }
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(args),
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/ticket/create`;
		const response = await fetch(url, config);
		console.log({args, response})
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

const addressItem = {address: "", type: "governmental"}
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
	hardwareComponentTypeQuantity: "1",
	hardwareQuantity: "1",
	hardwareName: "",
	// hardwareComponentTypeQuantityValue: "1",
	// hardwareComponentTypeQuantityName: "",
	softwareInstallationQuantity: "1",
	softwareInstallationName: "",
	softwareCustomizationQuantity: "1",
	softwareCustomizationName: "",
	numberOfWorkstation: "1",
	numberOfWorkSystems: "1",
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
		"scopeOfWorkDescriptionIsValid": false,
		"scopeOfWorkDescriptionHasError": "",
		
		"scopeOfWorkDocumentIsValid": false, // might not be need for this
		// DURATION
		"durationIsValid": true,

		//HARDWARE COMPONENT TYPE
		"hardwareInputTypeCurrentValue": "",
		"hardwareInputTypeCurrentValueIsValid": "",
		"hardwareInputTypeCurrentValueIsTouched": "",
		"hardwareInputTypeCurrentValueIsHasError": "",
		
		"hardwareComponentTypeListIsValid": false,
		//HARDWARE COMPONENT QUANTITY
		
		
		"hardwareQuantityIsValid": false,
		"hardwareQuantityIsTouched": "",
		"hardwareQuantityHasError": "",
		//SOFTWARE INSTALLATION

		"softwareInstallationNameIsValid": false,
		"softwareInstallationNameIsTouched": "",
		"softwareInstallationNameHasError": "",
		//SOFTWARE CUSTOMIZATION

		"softwareCustomizationNameIsValid": false,
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
		"locationAddressIsValid": false,
		"locationAddressIsTouched": "",
		"locationAddressHasError": "",
		//PICk UP LOCATION
		
		
		"pickLocationsAddressIsValid": false,
		"activePickLocationAddress": 0, // ZERO INDEX BASED
		"activePickLocationType": 0, // ZERO INDEX BASED
		"pickLocationAddress": "",
		"pickLocationType": "government",
		"pickLocationAddressIsValid": false,
		"pickLocationAddressIsTouched": "",
		"pickLocationAddressHasError": "",
		//DROP OFF LOCATION
		
		
		"dropOffLocationsAddressIsValid": false,
		"activeDropOffLocationAddress": 0, // ZERO INDEX BASED
		"activeDropOffLocationType": 0, // ZERO INDEX BASED
		"dropOffLocationAddress": "",
		"dropOffLocationType": "government",
		"dropOffLocationAddressIsValid": false,
		"dropOffLocationAddressIsTouched": "",
		"dropOffLocationAddressHasError": "",
		// MATERIALS PROCUREMENT
		
		"materialsDescriptionIsTouched": "",
		"materialsDescriptionIsValid": false,
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
	allPossibleFields: allPossibleFields,
	data: null,
	customer: {},
};

const createTicketSlice = createSlice({
	name: "createTicket",
	initialState: initialState,
	reducers: {
		toggleAddTicketModal: (state, action) => {
			// TICKET state.showAddTicketModal = !state.showAddTicketModal;
			return initialState
		},
		toggleTemplateModal: (state, action) => {
			// TICKET state.showTemplateModal = !state.showTemplateModal;
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
			if(window.location.pathname.includes("/tickets")){
				return initialState
			}else {
				state.customer = action.payload
				state.chosenTemplate = [];
				state.showAddTicketModal = true;
				state.showTemplateModal = false;
				state.pathToTemplate = [];
				const customerId = current(state).allPossibleFields.customerId
				state.allPossibleFields = {...allPossibleFields, customerId};
			}
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
			.addCase(createTicket.pending, (state, action) => {
				state.loading = true
			})
			.addCase(createTicket.fulfilled, (state, {payload}) => {
				state.loading = true
				state.loading = false
				const {status, code, data, message} = payload
				console.log(payload)
				if(status === "OK" && code === 200){
					state.data = data
					state.successful = true
					console.log("truly successful")
				}else {
					state.error = true
					state.errorMessage = message
				}
			})
			.addCase(createTicket.rejected, (state, {payload}) => {
				console.log({payload})
				state.loading = false
				state.error = true;
				state.errorMessage = payload;
				state.successful = false
			});
	},
});

export default createTicketSlice.reducer;
export const createTicketActions = createTicketSlice.actions;
