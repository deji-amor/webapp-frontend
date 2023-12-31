import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ClickAwayComp = ({ children, onClickAway }) => {
	const targetRef = useRef(null);

	useEffect(() => {
		const handleClickAway = (event) => {
			// Check if the click is outside the target component
			if (targetRef.current && !targetRef.current.contains(event.target)) {
				// Perform your click-away action here
				// console.log("Clicked away!");
        onClickAway()
			}
		};

		// Add event listener to the document body
		document.addEventListener("click", handleClickAway);

		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener("click", handleClickAway);
		};
	}, []); // Empty dependency array ensures that the effect runs once on mount

	return <div ref={targetRef}>{children}</div>;
};

export default ClickAwayComp;

ClickAwayComp.propTypes = {
	children: PropTypes.node,
  onClickAway: PropTypes.func
};
