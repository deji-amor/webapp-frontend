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
		"numberOfTechnicians": "",
		// SCOPE OF WOR
		"scopeOfWorkDescription": "",
		"scopeOfWorkDescriptionIsTouched": "",
		"scopeOfWorkDescriptionIsValid": "",
		"scopeOfWorkDescriptionHasError": "",
		"scopeOfWorkDocument": null,
		"startDateTime": "",
		"endDateTime": "",
		"hardwareQuantity": "",
		"hardwareList": [],
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
