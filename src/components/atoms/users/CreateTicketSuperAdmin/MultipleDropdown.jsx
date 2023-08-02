import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"
import tree from '../../../../state-manager/reducers/users/ticketCreationMultiplePath'

  const Wrapper = styled("div")`
		display: flex;
		width: 12.9375rem;
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

const MultipleDropdown = ({options}) => {
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
    console.log({selectedOption, option});
    if(!tree[option]){
      console.log("chosen template");
      return
    }

    if(selectedOption === option) setSelectedOption(null)
    else setSelectedOption(option)
  }

  return (
		<div className="relative w-full h-full">
      {/* THIS IS FOR SAME LINE DROPDOWN */}
			{selectedOption && (
				<div className="absolute w-full -left-[120%] top-0">
					<Wrapper>
						<MultipleDropdown options={tree[selectedOption].options} />
					</Wrapper>
				</div>
			)}
			{options.map((option) => (
				<Dropdown
					key={option}
					onClick={() => handleOptionClick(option)}
					className={`${selectedOption === option ? "bg-[rgba(80,87,229,0.08)]" : ""}`}
				>
					{option}
          {/* THIS IS FOR ONE STEP DOWN DROP DOWN */}
					{/* {
            (selectedOption && selectedOption === option) &&
            <div className="absolute w-full -left-[120%] top-0">
              <Wrapper>
                <MultipleDropdown options={tree[selectedOption].options} />
              </Wrapper>
            </div>
          } */}
				</Dropdown>
			))}
		</div>
	);
}

const TopLevel = ({pathOptions}) => {
  return (
    <Wrapper className=''>
      <MultipleDropdown options={Object.keys(pathOptions).filter(path => path === "Service Tickets" || path === "Project Tickets")}/>
    </Wrapper>
  )
}

TopLevel.propTypes = {
  pathOptions: PropTypes.object
}

MultipleDropdown.propTypes = {
  options: PropTypes.array
}

export default TopLevel