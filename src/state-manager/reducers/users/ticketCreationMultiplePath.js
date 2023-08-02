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
		fields: {},
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
	"IT Project Management*": {
		options: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work (attach document)",
			"Duration",
			"no. location",
		],
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
		fields: {},
	},
	"Hardware maintenance": {
		isTemplate: true,
		fields: {},
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
		fields: {},
	},
	"Skill Transfer": {
		isTemplate: true,
		fields: {},
	},
	"Vacation coverage": {
		isTemplate: true,
		fields: {},
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
		fields: {},
	},
	"Predictive maintenance": {
		isTemplate: true,
		fields: {},
	},
	"Prescriptive maintenance": {
		isTemplate: true,
		fields: {},
	},
	// SERVICE TICkETS END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

export default tree;
