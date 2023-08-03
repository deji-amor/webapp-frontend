const allFields = {
	"Point of contact": {
		"Point of contact name": {type: "text"},
		"Point of contact phone number": {type: "text"},
		"Point of contact address": {type: "text"},
	},
	"Number of technicians needed": {
		"Number of technicians": {type: "number"},
	},
	"Scope of work": {
		description: {type: "text"},
		document: {type: "file"},
	},
	duration: {
		"Start date-time": {type: "date-time"},
		"End date-time": {type: "date-time"},
	},
	"Hardware component": {
		Quantity: {type: "number"},
		"Hardware list": {type: "list", min: 1, max: 5}
	},
	Location: {
		"Number of location": {type: "number"},
		Location: {type: "list"},
		"building type": {type: "text"},
	},
	"Materials procurement": {
		description: {type: "text"},
	},
	"Number of work system": {},
	"software application": {},
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
		fields: {},
	},
	"Passive Survey": {
		isTemplate: true,
		fields: {},
	},
	"APOC (AP on a stick)": {
		isTemplate: true,
		fields: {},
	},
	"IT Project Management": {
		// DOWN
		isTemplate: true,
		fields: {},
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
		fields: {},
	},
	"Install and deploy software components": {
		isTemplate: true,
		fields: {},
	},
	"Structure user workstations": {
		isTemplate: true,
		fields: {},
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
		fields: {},
	},
	"Switch to a different workstation system": {
		isTemplate: true,
		fields: ["Point of contact", ""],
	},
	"alter the end": {
		isTemplate: true,
		fields: {},
	},
	Add: {
		options: ["Install additional software", "Install additional hardware"],
	},
	"Install additional software": {
		isTemplate: true,
		fields: {},
	},
	"Install additional hardware": {
		isTemplate: true,
		fields: {},
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
		fields: {},
	},
	"Update installed software": {
		isTemplate: true,
		fields: {},
	},
	"Customize software settings": {
		isTemplate: true,
		fields: {},
	},
	"Uninstall unused software": {
		isTemplate: true,
		fields: {},
	},
	"Onsite Support": {
		//DOWN
		options: ["Project Work", "Special Project", "Asset Inventory"],
	},
	"Project Work": {
		isTemplate: true,
		fields: {},
	},
	"Special Project": {
		isTemplate: true,
		fields: {},
	},
	"Asset Inventory": {
		isTemplate: true,
		fields: {},
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
