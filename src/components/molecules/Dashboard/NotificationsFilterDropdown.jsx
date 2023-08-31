import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import { notificationsActions } from "../../../state-manager/reducers/notifications/notifications";
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material'

const DropDownTablet = styled("div")`
	display: flex;
	padding: 0.5rem 0.75rem;
	align-items: center;
	gap: 0.25rem;
	border-radius: 0.5rem;
	background: #2b2e72;
  color: #fff;
  cursor: pointer;
`;

const Icon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			d="M12.1709 15.7924C12.4308 15.785 12.6684 15.6885 12.8615 15.4805L18.5055 9.70287C18.6689 9.53949 18.758 9.33156 18.758 9.08649C18.758 8.59635 18.3718 8.20276 17.8817 8.20276C17.644 8.20276 17.4138 8.2993 17.243 8.47011L12.1783 13.6759L7.0987 8.47011C6.9279 8.30673 6.70511 8.20276 6.46004 8.20276C5.96991 8.20276 5.58374 8.59635 5.58374 9.08649C5.58374 9.33156 5.67286 9.53949 5.83623 9.70287L11.4876 15.4805C11.6882 15.6885 11.9109 15.7924 12.1709 15.7924Z"
			fill="white"
		/>
	</svg>
);

Icon.propTypes = {
	className: PropTypes.string,
};

const Wrapper = styled("div")`
	display: flex;
	padding: 0.5rem 0.5rem 0.75rem 0.5rem;
	flex-direction: column;
	gap: 0.5rem;
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
`;

const Item = styled("div")`
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.0175rem;
  cursor: pointer;
`;

const NotificationsFilterDropdown = () => { 
  const {
    searchBy,
    currentSearchValue,
	} = useSelector((state) => state.notifications);
  const dispatch = useDispatch()
  const [showDrop, setShowDrop] = useState(false);

  const showDropdownHandler = () => {
    setShowDrop(pv => !pv)
  }

  const changeNotificationSearchByValueHandler = (newSearchValue) => {
    dispatch(
			notificationsActions.updateField({ key: "currentSearchValue", value: newSearchValue })
		);
  }

  useEffect(() => {
    const listener = (event) => {
      if(!event.target.closest("#notificationFilterDropdown")){
        setShowDrop(false)
      }
    }
    document.body.addEventListener("click", listener)
    return () => {
      document.body.removeEventListener("click", listener)
    }
  }, [])
  
  return (
		<div className="relative" id="notificationFilterDropdown">
			<DropDownTablet onClick={showDropdownHandler}>
				<span className='truncate'>{currentSearchValue}</span>
				<span>
					<Icon />
				</span>
			</DropDownTablet>
			{showDrop && (
				<Wrapper className='absolute top-[105%] right-0'>
					{searchBy
						.filter((item) => item !== currentSearchValue)
						.map((item) => (
							<Item onClick={(event) => {
                event.stopPropagation()
                changeNotificationSearchByValueHandler(item);
              }} className='truncate' key={item}>{item}</Item>
						))}
				</Wrapper>
			)}
		</div>
	);
}

export default NotificationsFilterDropdown