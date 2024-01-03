import React, { useState } from "react";
import { motion } from "framer-motion";
import tree from "../../../../state-manager/reducers/tickets/ticketCreationMultiplePath";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const RightArrow = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path
			d="M18.4883 14.001C18.4795 13.6934 18.3652 13.4121 18.1191 13.1836L11.2812 6.50391C11.0879 6.31055 10.8418 6.20508 10.5518 6.20508C9.97168 6.20508 9.50586 6.66211 9.50586 7.24219C9.50586 7.52344 9.62012 7.7959 9.82227 7.99805L15.9834 13.9922L9.82227 20.0039C9.62891 20.2061 9.50586 20.4697 9.50586 20.7598C9.50586 21.3398 9.97168 21.7969 10.5518 21.7969C10.8418 21.7969 11.0879 21.6914 11.2812 21.498L18.1191 14.8096C18.3652 14.5723 18.4883 14.3086 18.4883 14.001Z"
			fill="#1C1C1E"
		/>
	</svg>
);

const TicketTypeItem = ({ className, type, onClick, selectedType }) => {
	const handleClick = () => {
		if(tree[type]?.isTemplate){
		// navigate
		}
		if(type === selectedType){
			onClick(null)
			return
		}
		onClick(type);
	}

	return (
		<li
			onClick={handleClick}
			className={twMerge(
				`flex items-center w-full justify-between hover:bg-[rgba(80,87,229,0.08)] transition duration-300 ease-in-out cursor-pointer gap-2 self-stretch px-4 py-3 rounded-lg ${
					selectedType === type ? "bg-[rgba(80,87,229,0.08)]" : "bg-white"
				} ${className}`
			)}
		>
			<span className="truncate" title={type}>
				{type}
			</span>
			{!tree[type]?.isTemplate && <RightArrow />}
		</li>
	);
};

const SingleTicketTypeBlock = ({ className, types }) => {
	const [selectedType, setSelectedType] = useState(null);

	const setSelectedTypeHandler = (t) => {
		setSelectedType(t);
	};

	const nextTypes = tree[selectedType]?.options;
	if (!types) return;

	return (
		<>
			<motion.ul
				initial={{ opacity: 0, translateX: "1rem" }}
				animate={{ opacity: 1, translateX: "0rem" }}
				transition={{ duration: 0.5 }}
				className={twMerge(
					`flex flex-col justify-center z-[1000] items-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] divide-y-[1.5px] p-2 rounded-xl border-[0.5px] border-solid border-black relative ${className}`
				)}
			>
				{types?.map((type) => (
					<TicketTypeItem
						key={type}
						selectedType={selectedType}
						type={type}
						onClick={setSelectedTypeHandler}
					/>
				))}
				<SingleTicketTypeBlock
					className="absolute right-full top-0 w-full z-[1000] bg-white"
					types={nextTypes}
				/>
			</motion.ul>
		</>
	);
};

export default SingleTicketTypeBlock;

TicketTypeItem.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	selectedType: PropTypes.string,
};

SingleTicketTypeBlock.propTypes = {
	className: PropTypes.string,
	types: PropTypes.array,
};
