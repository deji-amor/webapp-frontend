import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectDropdown = styled("div")`
	border-radius: 0.5rem;
	border: 1px solid rgba(43, 46, 114, 0.4);
	background: #fff;
	box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
	padding: 0.625rem 0.75rem;
	width: 4rem;
	min-width: max-content;
	color: rgb(43, 46, 114);
	display: flex;
	align-items: center;
	justify-content: between;
	gap: 1rem;
	cursor: pointer;
`;

const NumberDropDown = ({min, max, value, onChange}) => {
  const options = Array.from({length: max - min + 1}, (_, i) => i + min)
	const [showDropdown, setShowDropDown] = useState(false)

	const showDropDownHandler = (e) => {
		e.stopPropagation();
		setShowDropDown(pv => !pv)
	}

	const handleChange = (value) => {
		onChange(value)
		setShowDropDown(false)
	}

	useEffect(() => {
		const eventHandler = (e) => {
			if(!e.target.closest("#dropdown-number")){
				setShowDropDown(false)
			}
		}
		document.addEventListener("click", eventHandler)
		return () => {
			document.removeEventListener("click", eventHandler)
		}
	}, [])

  return (
		<div className="relative">
			<SelectDropdown
				onClick={showDropDownHandler}
				value={value}
				className="outline-none focus:border focus:border-[#2B2E72] max-h-[10rem]"
			>
				<div className="">{value}</div>
				<div className="">
					<KeyboardArrowDownIcon fontSize="small" />
				</div>
			</SelectDropdown>
			{showDropdown && (
				<ul className="py-2 text-sm text-gray-700 cursor-pointer absolute w-full z-10 left-0 top-full bg-white max-h-[10rem] overflow-y-auto divide-y shadow-[0_2px_2px_rgb(0_0_0_/_0.2)]">
					{options.map((option) => (
						<li
							key={option}
							onClick={() => handleChange(option)}
							className={`block px-4 py-2 hover:bg-gray-100 text-center ${
								+option === +value ? "bg-gray-100" : ""
							}`}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

NumberDropDown.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
};

export default NumberDropDown