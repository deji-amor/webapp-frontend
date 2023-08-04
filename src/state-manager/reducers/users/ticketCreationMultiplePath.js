export const allFields = {
	"Point of contact": {
		pointOfContactName: {type: "text"},
		pointOfContactPhoneNumber: {type: "text"},
		pointOfContactAddress: {type: "text"},
	},
	"Number of technicians needed": {
		numberOfTechnicians: {type: "number"},
	},
	"Scope of work": {
		scopeOfWorkDescription: {type: "text"},
		scopeOfWorkDocument: {type: "file"},
	},
	duration: {
		startDateTime: {type: "date-time"},
		endDateTime: {type: "date-time"},
	},
	"Hardware component quantity": {
		hardwareQuantity: {type: "number"},
		hardwareName: {type: "text"},
	},
	"Hardware component type": {
		hardwareComponentTypeQuantity: {type: "number"},
		hardwareComponentTypeList: {type: "list", min: 1, max: 5},
	},
	Location: {
		numberOfLocation: {type: "number"},
		addresses: {type: "list"},
		buildingType: {type: "text"},
	},
	"Materials procurement": {
		materialsDescription: {type: "text"},
	},
	"Number of work station": {
		numberOfWorkStation: {type: "number"},
	},
	"Number of work systems": {
		numberOfWorkSystems: {type: "number"},
	},
	"Software application installation": {
		softwareQuantity: {type: "number"},
		softwareName: {type: "text"},
	},
	"Software application customization": {
		softwareQuantity: {type: "number"},
		softwareName: {type: "text"},
	},
	"Pick up location": {
		numberOfLocation: {type: "number"},
		addresses: {type: "list"},
		buildingType: {type: "text"},
	},
	"Drop off location": {
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
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Passive Survey": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"APOC (AP on a stick)": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"IT Project Management": {
		// DOWN
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Hardware component quantity",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Install and deploy software components": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Software application installation",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Structure user workstations": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Number of work station",
			"Scope of work",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Number of work system",
			"duration",
			"Pick up location",
			"Drop off location",
		],
	},
	"Switch to a different workstation system": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Number of work system",
			"duration",
			"Location",
		],
	},
	"alter the end": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Number of work system",
			"duration",
			"Location",
		],
	},
	Add: {
		options: ["Install additional software", "Install additional hardware"],
	},
	"Install additional software": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Software application installation",
			"duration",
			"Location",
		],
	},
	"Install additional hardware": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Hardware component quantity",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Hardware component type",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Update installed software": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Software application installation",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Customize software settings": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Software application customization",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Uninstall unused software": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Software application customization",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Onsite Support": {
		//DOWN
		options: ["Project Work", "Special Project", "Asset Inventory"],
	},
	"Project Work": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Special Project": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Asset Inventory": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Materials procurement",
			"Scope of work",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Materials procurement",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Hardware maintenance": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Hardware component",
			"Scope of work",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Skill Transfer": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Vacation coverage": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
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
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Predictive maintenance": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	"Prescriptive maintenance": {
		isTemplate: true,
		fields: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work",
			"duration",
			"Location",
		],
	},
	// SERVICE TICkETS END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

export default tree;
