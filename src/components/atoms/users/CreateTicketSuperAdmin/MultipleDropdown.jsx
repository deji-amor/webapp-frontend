import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"
import tree from '../../../../state-manager/reducers/users/ticketCreationMultiplePath'
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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

  // r6tfyui

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

  const handleOptionClick = (option) => {
    if(!tree[option]){
      console.log("chosen template");
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: [...pathToTemplate, option] }))
      return
    }

    if(selectedOption === option) {
			setSelectedOption(null);
			dispatch(createTicketActions.changeAnyState({ key: "level", value: currentLevel }));
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: pathToTemplate.slice(0, -1) }));
		}
    else {
			setSelectedOption(option);
			dispatch(createTicketActions.changeAnyState({ key: "level", value: level+1}));
			dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: [...pathToTemplate, option] }));
		}
  }

  return (
		<div className="w-full h-full">
			{(selectedOption && currentLevel < level) && (
				<div className="absolute w-full -left-[101%] top-0">
					<Wrapper>
						<MultipleDropdown level={currentLevel+1} options={tree[selectedOption].options} />
					</Wrapper>
				</div>
			)}
			{options.map((option) => (
				<Dropdown
					key={option}
					onClick={() => handleOptionClick(option)}
					className={`${selectedOption === option ? "bg-[rgba(80,87,229,0.08)]" : ""}`}
				>
          <div className='w-full flex justify-between'>
            <div className='truncat'>
              {option}
            </div>
            <ArrowBackIosIcon width={20} height={20}/>
          </div>
				</Dropdown>
			))}
		</div>
	);
}

const TopLevel = ({pathOptions}) => {
  return (
    <Wrapper className='relative border-2 border-red-500'>
      <MultipleDropdown level={0} options={Object.keys(pathOptions).filter(path => path === "Service Tickets" || path === "Project Tickets")}/>
    </Wrapper>
  )
}

TopLevel.propTypes = {
  pathOptions: PropTypes.object
}

MultipleDropdown.propTypes = {
  options: PropTypes.array,
	level: PropTypes.number,
}

export default TopLevel