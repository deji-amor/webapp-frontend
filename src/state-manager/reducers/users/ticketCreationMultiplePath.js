export const allFields = {
	pointOfContact: {
		pointOfContactName: "", // string
		pointOfContactPhoneNumber: "", // string
		pointOfContactAddress: "", // string
	},
	numberOfTechniciansNeeded: {
		numberOfTechnicians: "", // number
	},
	scopeOfWork: {
		scopeOfWorkDescription: "", // string
		scopeOfWorkDocument: "", // file or null
	},
	duration: {
		startDateTime: "", // date-time
		endDateTime: "", // date-time
	},
	hardwareComponentQuantity: {
		hardwareQuantity: "", // number
		hardwareName: "", // string
	},
	hardwareComponentType: {
		hardwareComponentTypeList: [], // array of hardwares
	},
	location: {
		locations: [], // [{type: "", address: ""}]
	},
	materialsProcurement: {
		materialsDescription: "", // string
	},
	numberOfWorkStation: {
		numberOfWorkStation: "", // string
	},
	numberOfWorkSystems: {
		numberOfWorkSystems: "", // string
	},
	softwareApplicationInstallation: {
		softwareQuantity: "", // number
		softwareName: "", // string
	},
	softwareApplicationCustomization: {
		softwareQuantity: "", // number
		softwareName: "", // string
	},
	pickUpLocation: {
		pickLocations: [], // [{type: "", address: ""}]
	},
	dropOffLocation: {
		dropOffLocations: [], // [{type: "", address: ""}]
	},
	additionalFields: {
		additionalFields: [], // {"fieldName": "fieldValue"}
	}
};

const tree = {
	// PROJECT TICkETS START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	"Project Tickets": {
		options: ["Ekahau Surveys and Design", "IMAC", "IT Project Management", "Onsite Support"],
		startingPoint: true,
	},
	"Ekahau Surveys and Design": {
		// DOWN
		options: ["Active Survey", "Passive Survey", "APOC (AP on a stick)"],
	},
	"Active Survey": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Passive Survey": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"APOC (AP on a stick)": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"IT Project Management": {
		// DOWN
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	IMAC: {
		// DOWN
		options: ["Install", "Move", "Add", "Change"],
	},
	Install: {
		options: [
			"Install and deploy hardware components",
			"Install and deploy software components",
			"Structure user workstations",
		],
	},
	"Install and deploy hardware components": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"hardwareComponentQuantity",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Install and deploy software components": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"softwareApplicationInstallation",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Structure user workstations": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"numberOfWorkStation",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	Move: {
		options: [
			"Transport a work system to a new location",
			"Switch to a different workstation system",
			"alter the end",
		],
	},
	"Transport a work system to a new location": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"Number of work system",
			"duration",
			"pickUpLocation",
			"dropOffLocation",
		],
	},
	"Switch to a different workstation system": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"Number of work system",
			"duration",
			"location",
		],
	},
	"alter the end": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"Number of work system",
			"duration",
			"location",
		],
	},
	Add: {
		options: ["Install additional software", "Install additional hardware"],
	},
	"Install additional software": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"softwareApplicationInstallation",
			"duration",
			"location",
		],
	},
	"Install additional hardware": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"hardwareComponentQuantity",
			"duration",
			"location",
		],
	},
	Change: {
		options: [
			"Alter the existing hardware configuration",
			"Update installed software",
			"Customize software settings",
			"Uninstall unused software",
		],
	},
	"Alter the existing hardware configuration": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"hardwareComponentType",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Update installed software": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"softwareApplicationInstallation",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Customize software settings": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"softwareApplicationCustomization",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Uninstall unused software": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"softwareApplicationCustomization",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Onsite Support": {
		//DOWN
		options: ["Project Work", "Special Project", "Asset Inventory"],
	},
	"Project Work": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Special Project": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Asset Inventory": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"materialsProcurement",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	// PROJECT TICkETS END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	// SERVICE TICkETS START >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	"Service Tickets": {
		options: [
			"Break Fix Maintenance",
			"Onsite Support/IT Emergencies",
			"Desktop Support",
			"Smart Hands",
			"Preventative Maintenance",
		],
		startingPoint: true,
	},
	"Break Fix Maintenance": {
		// DOWN
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	Troubleshooting: {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"materialsProcurement",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Hardware maintenance": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"Hardware component",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Onsite Support/IT Emergencies": {
		// DOWN
		options: ["IT Emergencies"],
	},
	"IT Emergencies": {
		options: ["Staff Augmentation", "Skill Transfer", "Vacation coverage"],
	},
	"Staff Augmentation": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Skill Transfer": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Vacation coverage": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},

	"Desktop Support": {
		// DOWN
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	// DEFINED ABOVE
	"Smart Hands": {
		// DOWN
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	// DEFINED ABOVE
	"Preventative Maintenance": {
		//DOWN
		options: [
			"Usage-based preventive maintenance",
			"Predictive maintenance",
			"Prescriptive maintenance",
		],
	},
	"Usage-based preventive maintenance": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Predictive maintenance": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	"Prescriptive maintenance": {
		isTemplate: true,
		fields: [
			"pointOfContact",
			"additionalFields",
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	// SERVICE TICkETS END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

export default tree;

		// fields: [
		// 	"pointOfContact",
		// 	"numberOfTechniciansNeeded",
		// 	"Number of work system",
		// 	"duration",
		// 	"location",
		// ],

// req = {
// 	ticqetType: "project request", // service request
// 	form: "alter the end",
// 	path: ["Project request", "IMAC", "Move", "alter the end"],
// 	pointOfContactName: "vvvvy",
// 	pointOfContactAddress: "cytgv",
// 	pointOfContactPhoneNumber: "zexrtcytyuv",
// 	numberOfTechnicians: 12,
// 	numberOfWorkSystems: 5,
// 	startDateTime: "12/24/56...",
// 	endDateTime: "12/67.90..",
// 	location: [{type: "governmental", address: "ctvyvyuvbyu"}]
// }