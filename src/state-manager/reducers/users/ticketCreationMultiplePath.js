export const allFields = {
	"pointOfContact": {
		pointOfContactName: {type: "text"},
		pointOfContactPhoneNumber: {type: "text"},
		pointOfContactAddress: {type: "text"},
	},
	"numberOfTechniciansNeeded": {
		numberOfTechnicians: {type: "number"},
	},
	"scopeOfWork": {
		scopeOfWorkDescription: {type: "text"},
		scopeOfWorkDocument: {type: "file"},
	},
	duration: {
		startDateTime: {type: "date-time"},
		endDateTime: {type: "date-time"},
	},
	"hardwareComponentQuantity": {
		hardwareQuantity: {type: "number"},
		hardwareName: {type: "text"},
	},
	"hardwareComponentType": {
		hardwareComponentTypeQuantity: {type: "number"},
		hardwareComponentTypeList: {type: "list", min: 1, max: 5},
	},
	location: {
		numberOfLocation: {type: "number"},
		addresses: {type: "list"},
		buildingType: {type: "text"},
	},
	"materialsProcurement": {
		materialsDescription: {type: "text"},
	},
	"numberOfWorkStation": {
		numberOfWorkStation: {type: "number"},
	},
	"numberOfWorkSystems": {
		numberOfWorkSystems: {type: "number"},
	},
	"softwareApplicationInstallation": {
		softwareQuantity: {type: "number"},
		softwareName: {type: "text"},
	},
	"softwareApplicationCustomization": {
		softwareQuantity: {type: "number"},
		softwareName: {type: "text"},
	},
	"pickUpLocation": {
		numberOfLocation: {type: "number"},
		addresses: {type: "list"},
		buildingType: {type: "text"},
	},
	"dropOffLocation": {
		numberOfLocation: {type: "number"},
		addresses: {type: "list"},
		buildingType: {type: "text"},
	},
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
			"numberOfTechniciansNeeded",
			"scopeOfWork",
			"duration",
			"location",
		],
	},
	// SERVICE TICkETS END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

export default tree;
