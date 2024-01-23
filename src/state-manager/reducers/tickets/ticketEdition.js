import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";
import {uploadFile, deleteFileByUrl} from "../../../aws/aws-crud-operations";
import {format} from "date-fns";
import tree from "./ticketCreationMultiplePath";

export const editTicket = createAsyncThunk("ticketEdition", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		if (args.scopeOfWorkDocument && args.scopeOfWorkDocumentUrl) {
			console.log("a new document was uploaded to the ui")
			await deleteFileByUrl(args.scopeOfWorkDocumentUrl);
			const {scopeOfWorkDocument} = args;
			const fileUrl = await uploadFile(scopeOfWorkDocument, "tickets", "documents")
			if (fileUrl) {
				args.scopeOfWorkDocumentUrl = fileUrl;
			}
		}else if(args.scopeOfWorkDocument){
			console.log("first time document upload")
			const {scopeOfWorkDocument} = args;
			const fileUrl = await uploadFile(scopeOfWorkDocument, "tickets", "documents")
			if (fileUrl) {
				args.scopeOfWorkDocumentUrl = fileUrl;
			}
		}
		const config = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(args),
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/ticket/edit`;
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

export function getTodayAndTomorrow(formatString) {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);

	function formatDate(date) {
		if (formatString) {
			return format(date, formatString);
		} else {
			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const day = String(date.getDate()).padStart(2, "0");
			return `${month}-${day}-${year}`;
		}
	}

	return {
		today: formatDate(today, formatString),
		tomorrow: formatDate(tomorrow, formatString),
	};
}


const addressItem = {address: "", type: "governmental"};
const addressList = [addressItem];

export const allRequiredFields = {
	customerId: "",
	pointOfContactName: "",
	pointOfContactPhoneNumber: "",
	pointOfContactAddress: "",
	numberOfTechnicians: "1",
	scopeOfWorkDescription: "",
	scopeOfWorkDocument: null,
	scopeOfWorkDocumentUrl: "",
	startDateTime: "",
	endDateTime: "",
	hardwareComponentTypeList: [],
	hardwareComponentTypeQuantity: "1",
	hardwareQuantity: "1",
	hardwareName: "",
	// HANDLE hardwareComponentTypeQuantityValue: "1",
	// HANDLE hardwareComponentTypeQuantityName: "",
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

	pointOfContactNameIsTouched: false,
	pointOfContactNameIsValid: false,
	pointOfContactNameHasError: false,
	// POINT OF CONTACT PHONE NUMBER

	pointOfContactPhoneNumberIsTouched: false,
	pointOfContactPhoneNumberIsValid: false,
	pointOfContactPhoneNumberHasError: false,
	// POINT OF CONTACT ADDRESS

	pointOfContactAddressIsTouched: false,
	pointOfContactAddressIsValid: false,
	pointOfContactAddressHasError: false,
	// NUMBER OF TECHNICIANS

	// SCOPE OF WORK

	scopeOfWorkDescriptionIsTouched: "",
	scopeOfWorkDescriptionIsValid: false,
	scopeOfWorkDescriptionHasError: "",
	scopeOfWorkDocumentUrl: "",

	scopeOfWorkDocumentIsValid: false, // might not be need for this
	// DURATION
	durationIsValid: true,

	//HARDWARE COMPONENT TYPE
	hardwareInputTypeCurrentValue: "",
	hardwareInputTypeCurrentValueIsValid: "",
	hardwareInputTypeCurrentValueIsTouched: "",
	hardwareInputTypeCurrentValueIsHasError: "",

	hardwareComponentTypeListIsValid: false,
	//HARDWARE COMPONENT QUANTITY

	hardwareQuantityIsValid: false,
	hardwareNameIsValid: false,
	hardwareNameIsTouched: "",
	hardwareNameHasError: "",
	//SOFTWARE INSTALLATION

	softwareInstallationNameIsValid: false,
	softwareInstallationNameIsTouched: "",
	softwareInstallationNameHasError: "",
	//SOFTWARE CUSTOMIZATION

	softwareCustomizationNameIsValid: false,
	softwareCustomizationNameIsTouched: "",
	softwareCustomizationNameHasError: "",
	// WORKSTATION

	// WORK SYSTEM

	// LOCATION

	locationsAddressIsValid: false,
	activeLocationAddress: 0, // ZERO INDEX BASED
	activeLocationType: 0, // ZERO INDEX BASED
	locationAddress: "",
	locationType: "government",
	locationAddressIsValid: false,
	locationAddressIsTouched: "",
	locationAddressHasError: "",
	//PICk UP LOCATION

	pickLocationsAddressIsValid: false,
	activePickLocationAddress: 0, // ZERO INDEX BASED
	activePickLocationType: 0, // ZERO INDEX BASED
	pickLocationAddress: "",
	pickLocationType: "government",
	pickLocationAddressIsValid: false,
	pickLocationAddressIsTouched: "",
	pickLocationAddressHasError: "",
	//DROP OFF LOCATION

	dropOffLocationsAddressIsValid: false,
	activeDropOffLocationAddress: 0, // ZERO INDEX BASED
	activeDropOffLocationType: 0, // ZERO INDEX BASED
	dropOffLocationAddress: "",
	dropOffLocationType: "government",
	dropOffLocationAddressIsValid: false,
	dropOffLocationAddressIsTouched: "",
	dropOffLocationAddressHasError: "",
	// MATERIALS PROCUREMENT

	materialsDescriptionIsTouched: "",
	materialsDescriptionIsValid: false,
	materialsDescriptionHasError: "",
	// EXTRA FIELDS
	extraFieldNameInputTypeCurrentValue: "",
	extraFieldNameInputTypeCurrentValueIsValid: "",
	extraFieldNameInputTypeCurrentValueIsTouched: "",
	extraFieldNameInputTypeCurrentValueIsHasError: "",
	extraFieldValueInputTypeCurrentValue: "",
	extraFieldValueInputTypeCurrentValueIsValid: "",
	extraFieldValueInputTypeCurrentValueIsTouched: "",
	extraFieldValueInputTypeCurrentValueIsHasError: "",

	additionalFieldsIsValid: true,
};

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
  originalTicket: {},
	data: [],
	customer: {},
};

const formatToApiDate = dateString => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

const editTicketSlice = createSlice({
	name: "editTicket",
	initialState: initialState,
	reducers: {
		setTicketToEdit: (state, action) => {
			const ticketToEdit = action.payload;
			// TICkET METADATA STARTS HERE
			state.pathToTemplate = JSON.parse(ticketToEdit.ticket_path);
			state.chosenTemplate = tree[ticketToEdit.ticket_form].fields;
			state.allPossibleFields.customerId = ticketToEdit.customer_id;
			// TICkET METADATA STARTS HERE

			// POINT OF CONTACT SECTION STARTS HERE
			state.allPossibleFields.pointOfContactName = ticketToEdit.point_of_contact_name;
			state.allPossibleFields.pointOfContactNameIsValid = true;
			state.allPossibleFields.pointOfContactPhoneNumber =
				ticketToEdit.point_of_contact_phone_number;
			state.allPossibleFields.pointOfContactPhoneNumberIsValid = true;
			state.allPossibleFields.pointOfContactAddress = ticketToEdit.point_of_contact_address?.replaceAll("\\n", "\n");
			state.allPossibleFields.pointOfContactAddressIsValid = true;
			// POINT OF CONTACT SECTION ENDS HERE

			//  MATERIAL PROCUREMENT SECTION STARTS HERE
			state.allPossibleFields.materialsDescription = ticketToEdit.materials_description?.replaceAll("\\n", "\n");
			state.allPossibleFields.materialsDescriptionIsValid = true;
			// MATERIAL PROCUREMENT SECTION ENDS HERE

			// SCOPE OF WORK OF WORK SECTION STARTS HERE
			state.allPossibleFields.scopeOfWorkDescription = ticketToEdit.scope_of_work_description?.replaceAll("\\n", "\n");
			state.allPossibleFields.scopeOfWorkDescriptionIsValid = true;
			state.allPossibleFields.scopeOfWorkDocumentUrl = ticketToEdit.scope_of_work_document;
			// state.allPossibleFields.scopeOfWorkDocument = ticketToEdit.scope_of_work_document;
			// state.allPossibleFields.scopeOfWorkDocumentIsValid
			// SCOPE OF WORK OF WORK SECTION ENDS HERE

			// SCOPE OF WORK OF DURATION STARTS HERE
			console.log(ticketToEdit.start_date_time);
			state.allPossibleFields.startDateTime = formatToApiDate(ticketToEdit.start_date_time);
			state.allPossibleFields.endDateTime = formatToApiDate(ticketToEdit.end_date_time);
			// SCOPE OF WORK OF DURATION STARTS HERE

			// SCOPE OF WORK OF NUMBER OF TECHNICIANS ENDS HERE
			state.allPossibleFields.numberOfTechnicians = ticketToEdit.number_of_technicians;
			// SCOPE OF WORK OF NUMBER OF TECHNICIANS ENDS HERE

			// SCOPE OF WORK OF NUMBER OF HARDWARE COMPONENT TYPE ENDS HERE
			state.allPossibleFields.hardwareComponentTypeList = JSON.parse(
				ticketToEdit.hardware_component_type_list
			);
			state.allPossibleFields.hardwareComponentTypeQuantity =
				ticketToEdit.hardware_component_type_quantity
					? ticketToEdit.hardware_component_type_quantity
					: 1;
			// SCOPE OF WORK OF NUMBER OF HARDWARE COMPONENT TYPE ENDS HERE

			// SCOPE OF WORK OF NUMBER OF HARDWARE COMPONENT QUANTITY ENDS HERE
			state.allPossibleFields.hardwareQuantity = ticketToEdit.hardware_quantity;
			state.allPossibleFields.hardwareName = ticketToEdit.hardware_name;
			state.allPossibleFields.hardwareNameIsValid = true;
			// SCOPE OF WORK OF NUMBER OF HARDWARE COMPONENT QUANTITY ENDS HERE

			// SCOPE OF WORK OF NUMBER OF NUMBER OF WORK STATION ENDS HERE
			state.allPossibleFields.numberOfWorkstation = ticketToEdit.number_of_work_station;
			// SCOPE OF WORK OF NUMBER OF NUMBER OF WORK STATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF NUMBER OF WORK SYSTEMS ENDS HERE
			state.allPossibleFields.numberOfWorkSystems = ticketToEdit.number_of_work_systems;
			// SCOPE OF WORK OF NUMBER OF NUMBER OF WORK STATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF SOFTWARE CUSTOMIZATION ENDS HERE
			state.allPossibleFields.softwareCustomizationName = ticketToEdit.software_customization_name;
			state.allPossibleFields.softwareCustomizationNameIsValid = true;
			state.allPossibleFields.softwareCustomizationQuantity =
				ticketToEdit.software_customization_quantity;
			// SCOPE OF WORK OF NUMBER OF SOFTWARE CUSTOMIZATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF vSOFTWARE INSTALLATION ENDS HERE
			state.allPossibleFields.softwareInstallationName = ticketToEdit.software_installation_name;
			state.allPossibleFields.softwareInstallationNameIsValid = true;
			state.allPossibleFields.softwareInstallationQuantity =
				ticketToEdit.software_installation_quantity;
			// SCOPE OF WORK OF NUMBER OF vSOFTWARE INSTALLATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF PICK UP LOCATION ENDS HERE
			let pickUpLocations =
				ticketToEdit.pick_locations === "undefined"
					? state.allPossibleFields.pickLocations
					: JSON.parse(ticketToEdit.pick_locations);
			console.log(pickUpLocations)
			pickUpLocations = pickUpLocations.map(loc => ({...loc, address: loc.address?.replaceAll("\\n", "\n")}))
			console.log(pickUpLocations);
			state.allPossibleFields.pickLocations = pickUpLocations;
			state.allPossibleFields.numberOfPickLocation = pickUpLocations.length;
			state.allPossibleFields.pickLocationsAddressIsValid = true;
			state.allPossibleFields.pickLocationAddress = pickUpLocations[0]?.address;
			state.allPossibleFields.pickLocationType = pickUpLocations[0]?.type;
			state.allPossibleFields.pickLocationAddressIsValid = true;
			// SCOPE OF WORK OF NUMBER OF PICK UP LOCATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF DROP OFF LOCATION ENDS HERE
			let dropOffLocations =
				ticketToEdit.drop_off_locations === "undefined"
					? state.allPossibleFields.dropOffLocations
					: JSON.parse(ticketToEdit.drop_off_locations);
			console.log(dropOffLocations)
			dropOffLocations = dropOffLocations.map(loc => ({...loc, address: loc.address?.replaceAll("\\n", "\n")}))
			console.log(dropOffLocations);
			state.allPossibleFields.dropOffLocations = dropOffLocations;
			state.allPossibleFields.numberOfDropLocation = dropOffLocations.length;
			state.allPossibleFields.dropOffLocationAddressIsValid = true;
			state.allPossibleFields.dropOffLocationAddress = dropOffLocations[0]?.address;
			state.allPossibleFields.dropOffLocationType = dropOffLocations[0]?.type;
			state.allPossibleFields.dropOffLocationsAddressIsValid = true;
			// SCOPE OF WORK OF NUMBER OF DROP OFF LOCATION ENDS HERE

			// SCOPE OF WORK OF NUMBER OF LOCATION ENDS HERE
			let locations =
				ticketToEdit.locations === "undefined"
					? state.allPossibleFields.locations
					: JSON.parse(ticketToEdit.locations);
			console.log(locations)
			locations = locations.map(loc => ({...loc, address: loc.address?.replaceAll("\\n", "\n")}))
			console.log(locations);
			state.allPossibleFields.locations = locations;
			state.allPossibleFields.numberOfLocation = locations.length;
			state.allPossibleFields.locationsAddressIsValid = true;
			state.allPossibleFields.locationAddress = locations[0]?.address;
			state.allPossibleFields.locationType = locations[0]?.type;
			state.allPossibleFields.locationAddressIsValid = true;

			const additionalFieldsList = JSON.parse(ticketToEdit.additional_fields);
			state.allPossibleFields.additionalFields = additionalFieldsList.map(item => ({
				name: Object.entries(item)[0][0],
				value: Object.entries(item)[0][1],
			}));
			state.originalTicket = state.allPossibleFields;
		},
		reset: () => {
			return initialState;
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
	},
	extraReducers: builder => {
		builder
			.addCase(editTicket.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(editTicket.fulfilled, (state, {payload}) => {
				state.loading = true;
				state.loading = false;
				const {status, code, data, message} = payload;
				console.log(payload);
				if (status === "OK" && code === 200) {
					state.data = Array.isArray(data) ? data[0] : data;
					state.successful = true;
					console.log("edit truly successful");
				} else {
					state.error = true;
					state.errorMessage = message;
				}
			})
			.addCase(editTicket.rejected, (state, {payload}) => {
				console.log({payload});
				state.loading = false;
				state.error = true;
				state.errorMessage = payload;
				state.successful = false;
			});
	},
});

export default editTicketSlice.reducer;
export const editTicketActions = editTicketSlice.actions;
