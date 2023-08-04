import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const createTicket = createAsyncThunk("ticket", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
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

const allPossibleFields = {
		// POINT OF CONTACT NAME
		"pointOfContactName": "",
		"pointOfContactNameIsTouched": "",
		"pointOfContactNameIsValid": "",
		"pointOfContactNameHasError": "",
		// POINT OF CONTACT PHONE NUMBER
		"pointOfContactPhoneNumber": "",
		"pointOfContactPhoneNumberIsTouched": "",
		"pointOfContactPhoneNumberIsValid": "",
		"pointOfContactPhoneNumberHasError": "",
		// POINT OF CONTACT ADDRESS
		"pointOfContactAddress": "",
		"pointOfContactAddressIsTouched": "",
		"pointOfContactAddressIsValid": "",
		"pointOfContactAddressHasError": "",
		// NUMBER OF TECHNICIANS
		"numberOfTechnicians": "1",
		// SCOPE OF WORK
		"scopeOfWorkDescription": "",
		"scopeOfWorkDescriptionIsTouched": "",
		"scopeOfWorkDescriptionIsValid": "",
		"scopeOfWorkDescriptionHasError": "",
		"scopeOfWorkDocument": null,
		"scopeOfWorkDocumentIsValid": false, // might not be need for this
		// DURATION
		"startDateTime": getTodayAndTomorrow().today,
		"endDateTime": getTodayAndTomorrow().tomorrow,
		//HARDWARE COMPONENT TYPE
		"hardwareComponentTypeQuantity": "1",
		"hardwareInputTypeCurrentValue": "",
		"hardwareInputTypeCurrentValueIsValid": "",
		"hardwareInputTypeCurrentValueIsTouched": "",
		"hardwareInputTypeCurrentValueIsHasError": "",
		"hardwareComponentTypeList": ["one", "two", "three"],
		"hardwareComponentTypeListIsValid": "",
		"numberOfLocation": "",
		"addresses": [],
		"buildingType": "",
		// MATERIALS PROCUREMENT
		"materialsDescription": "",
		"materialsDescriptionIsTouched": "",
		"materialsDescriptionIsValid": "",
		"materialsDescriptionHasError": "",
	}

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	showAddTicketModal: !false,
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
			state.pathToTemplate = []
		},
		updateField: (state, action) => {
			const payload = action.payload

			if(Array.isArray(payload)){
				payload.forEach(({key, value}) => {
					state.allPossibleFields[key] = value
				});
			}else {
				const {key, value} = payload
				state.allPossibleFields[key] = value
			}

		}
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
