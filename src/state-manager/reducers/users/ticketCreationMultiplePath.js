const tree = {
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
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	"Onsite Support/IT Emergencies": {
		options: ["IT Emergencies"],
	},
	"Desktop Support": {
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	"Smart Hands": {
		options: ["Troubleshooting", "Hardware maintenance"],
	},
	"Project Tickets": {
		options: ["Ekahua Surveys and Design", "IMAC", "IT Project Management", "Onsite Support"],
		startingPoint: true,
	},
  "Active Survey": {
    isTemplate: true,
    fields: {

    }
  },
	"Ekahau Surveys and Design": {
		options: ["Active Survey", "Passive Survey", "APOC (AP on a stick)"],
	},
	IMAC: {
		options: ["Install", "Move", "Add", "Change"],
	},
	"IT Project Management": {
		options: [
			"Point of contact",
			"Number of technicians needed",
			"Scope of work (attach document)",
			"Duration",
			"no. location",
		],
	},
};

export default tree;
