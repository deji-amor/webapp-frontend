import React from "react";
import { useSelector } from "react-redux";
import SidebarLink from "../../atoms/Dashboard/SidebarLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import Logo from "../../atoms/Login/Logo";
import { styled } from "@mui/material";

const Sidebar = () => {
	const Aside = styled("div")`

		.logo {
			padding-left: 1.62rem;
			padding-right: 1.62rem;
			margin-bottom: 5rem /* 80px */;
		}

		.logout {
			position: absolute;
			bottom: 0.5rem /* 8px */;
		}
	`;

	const {showSidebar} = useSelector(state => state.ui)

	return (
		<Aside
			className={`basis-[15%] bg-[#2b2e72] fixed max-w-[60%] ${
				showSidebar ? "-left-full top-0" : ""
			} min-h-full z-50 sm:relative py-[2.2rem]`}
		>
			<div className="logo">
				<Logo />
			</div>
			<div className="flex flex-col gap-[1rem]">
				<SidebarLink
					link={"dashboard"}
					name={"dashboard"}
					icon={<DashboardIcon className="icon" />}
				/>
				<SidebarLink
					link={"tickets"}
					name={"tickets"}
					icon={<WorkIcon className="icon" />}
				/>
				<SidebarLink
					link={"users"}
					name={"users"}
					icon={<PeopleIcon className="icon" />}
				/>
				<SidebarLink
					link={"reports"}
					icon={<BarChartSharpIcon className="icon" />}
					name={"reports"}
				/>
			</div>
			<div className="logout">
				<SidebarLink link={"logout"} icon={<LogoutSharpIcon className="icon" />} />
			</div>
		</Aside>
	);
};

export default Sidebar;
