import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"
import tree from '../../../../state-manager/reducers/users/ticketCreationMultiplePath'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from 'react-redux';
import { createTicketActions } from '../../../../state-manager/reducers/users/ticketCreation';

  const Wrapper = styled("div")`
		display: flex;
		width: 17rem;
		padding: 0.5rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 0.75rem;
		border: 0.4px solid #000;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.32);
		z-index: 1000;
	`;

const MultipleDropdown = ({options, level: currentLevel}) => {
	const dispatch = useDispatch()
	const { level, pathToTemplate } = useSelector((state) => state.ticketCreation);
  const [selectedOption, setSelectedOption] = useState(null)

  const Dropdown = styled("div")`
    position: relative;
		display: flex;
		padding: 0.75rem 1rem;
		align-items: center;
		gap: 0.5rem;
		align-self: stretch;
		color: #2b2e72;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 142.857% */
		cursor: pointer;
		&:hover {
			background-color: rgba(80, 87, 229, 0.08);
		}
	`;


  const handleOptionClick = (event, option) => {
		event.stopPropagation();
		// WHEN WE HAVE REACHED THE END AND TO REDIRECT TO THE FORM
		if (!tree[option]?.options) {
			const newpath = [...pathToTemplate].slice(0, currentLevel);
			newpath[currentLevel] = option;
			// console.log({oldPath: pathToTemplate, newpath});
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: newpath }));
			// REDIRECT TO Ticket TEMPLATE FORM
			// console.log(tree[option]);
			dispatch(createTicketActions.goToTicketTemplateForm(tree[option]?.fields));
			// console.log("chosen template");
			return;
		}

		// WHEN THERE WAS ALREADY ONE SELECTED SO WE REMOVE ALL SELECTED ONES FROM HERE TO FIX
		if (selectedOption) {
			console.log("new condition");
			setSelectedOption(null);
			dispatch(createTicketActions.changeAnyState({ key: "level", value: currentLevel }));
			const newPath = [...pathToTemplate].slice(0, currentLevel);
			// console.log(newPath);
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: newPath }));
			return;
		}

		// WHEN THERE WAS nONE NONE SELECTED SO WE SELECT ONE
		if (selectedOption === option) {
			setSelectedOption(null);
			dispatch(createTicketActions.changeAnyState({ key: "level", value: currentLevel }));
			const newPath = [...pathToTemplate].slice(0, currentLevel);
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: newPath }));
		} else {
			setSelectedOption(option);
			dispatch(createTicketActions.changeAnyState({ key: "level", value: level + 1 }));
			const newpath = [...pathToTemplate].slice(0, currentLevel);
			newpath[currentLevel] = option;
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: newpath }));
		}
	}
	// console.log(pathToTemplate);

  return (
		<div className="w-full h-full">
			{selectedOption && (
				<div className="absolute w-full -left-[101%] top-0">
					<Wrapper>
						<MultipleDropdown level={currentLevel + 1} options={tree[selectedOption].options} />
					</Wrapper>
				</div>
			)}
			{options &&
				options.map((option) => (
					<Dropdown
						key={option}
						onClick={(e) => handleOptionClick(e, option)}
						className={`${selectedOption === option ? "bg-[rgba(80,87,229,0.08)]" : ""}`}
					>
						<div className="w-full flex justify-between">
							<div className="truncate">{option}</div>
							{tree[option]?.options && <ArrowForwardIosIcon width={20} height={20} className='text-[0.5rem]'/>}
						</div>
					</Dropdown>
				))}
		</div>
	);
}

const TopLevel = () => {
  return (
    <Wrapper className='relative border-2 border-red-500'>
      <MultipleDropdown level={0} options={Object.keys(tree).filter(path => path === "Service Tickets" || path === "Project Tickets")}/>
    </Wrapper>
  )
}

MultipleDropdown.propTypes = {
  options: PropTypes.array,
	level: PropTypes.number,
}

export default TopLevel