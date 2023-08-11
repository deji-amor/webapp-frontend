import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from "@mui/icons-material/Close";

const Tab = ({children, onRemove}) => {

	const clickHandler = () => {
		onRemove(children)
	}

  return (
		<button className="inline-flex py-[0.375rem] px-[0.75rem] items-center gap-[0.25rem] bg-[#2b2e72] text-white font-poppins text-[0.875rem] font-[500]">
			{children}
			<CloseIcon onClick={clickHandler} fontSize="15" className="cursor-pointer" />
		</button>
	);
}

Tab.propTypes = {
  children: PropTypes.node,
  onRemove: PropTypes.func
}

export default Tab