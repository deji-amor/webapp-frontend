import React, { useState, useEffect } from "react";
import Tab from "../../../atoms/tickets/CreateTicketSuperAdmin/Tab";
import MultiplePathButton from "../../../atoms/tickets/CreateTicketSuperAdmin/MultiplePathButton";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { createTicketActions } from "../../../../state-manager/reducers/tickets/ticketCreation";
import TopLevel from "../../../atoms/tickets/CreateTicketSuperAdmin/MultipleDropdown";
import tree from "../../../../state-manager/reducers/tickets/ticketCreationMultiplePath";

const Tabs = () => {
	const { showServiceRequestsTab, showProjectsTab } = useSelector((state) => state.ticketCreation);
	const dispatch = useDispatch();

	const handleServiceRequestTabToggle = () => {
    if(!showServiceRequestsTab){
      dispatch(
        createTicketActions.changeMultipleState([
          { key: "showServiceRequestsTab", value: true },
          { key: "showProjectsTab", value: false },
        ])
      );
    }
	};

	const handleShowProjectTabToggle = () => {
    if (!showProjectsTab) {
			dispatch(
				createTicketActions.changeMultipleState([
					{ key: "showServiceRequestsTab", value: false },
					{ key: "showProjectsTab", value: true },
				])
			);
		}
	};

	const [showTopLevel, setShowTopLevel] = useState(false)

	const startFlow = (e) => {
		e.stopPropagation();
		setShowTopLevel(pv => !pv)
		dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: [] }));
	}

  useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest("#top-level-dropdown")) {
				setShowTopLevel(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex items-center justify-between">
			<div className="flex gap-[1.5rem]">
				<div className="">
					<Tab onClick={handleServiceRequestTabToggle} isActive={showServiceRequestsTab}>
						Service Requests
					</Tab>
				</div>
				<div className="">
					<Tab onClick={handleShowProjectTabToggle} isActive={showProjectsTab}>
						Projects
					</Tab>
				</div>
			</div>
			<div id="top-level-dropdown" className="relative w-[10rem]">
				<MultiplePathButton onClick={startFlow}>
					{" "}
					<AddIcon /> Add Ticket{" "}
				</MultiplePathButton>
				{showTopLevel && (
					<div className="absolute top-[115%] right-0 bg-white z-[100]">
						<TopLevel />
					</div>
				)}
			</div>
		</div>
	);
};

export default Tabs;
