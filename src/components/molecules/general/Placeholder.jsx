import React from 'react'
import PropTypes from 'prop-types'
import placeholderImg from "./placeholder.png"
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'

const BigText = styled("p")`
	color: #333;
	text-align: center;
	font-family: Poppins;
	font-size: 2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.85444rem; /* 142.723% */
	letter-spacing: 0.04rem;
	text-align: center;
  max-width: 43rem;

	.highlighted {
		color: #2b2e72;
		font-family: Poppins;
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.85444rem;
		letter-spacing: 0.04rem;
	}
`;

const SmallText = styled("p")`
	color: #706e6e;
	text-align: center;
	font-family: Poppins;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.75656rem; /* 140.527% */
	letter-spacing: 0.05rem;
	text-align: center;
  max-width: 35rem;
`;

const ActionButton = styled("button")`
	width: 26.5625rem;
	border-radius: 0.5rem;
	padding: 1rem 1.5rem;
	background: #2b2e72;
	color: #fff;
	font-family: Poppins;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 0.875rem; /* 70% */
`;

const Placeholder = ({ messageHeader, messageParagraph, buttonText, onClick, isThereActionButton }) => {
  const {firstName} = useSelector(state => state.authUser.data)


	return (
		<div className="flex flex-col justify-center items-center">
			<img src={placeholderImg} className="mb-[1rem] w-[18rem] h-[15rem]" />
			<div className="space-y-[1.25rem] mb-[1rem] flex flex-col items-center">
				<BigText>
					Hi <span className="highlighted">{firstName},</span> {messageHeader}
				</BigText>
				<SmallText>
					{messageParagraph}
				</SmallText>
			</div>
      {
        isThereActionButton &&
        <div className="">
          <ActionButton onClick={onClick} type="button">{buttonText}</ActionButton>
        </div>
      }
		</div>
	);
};

Placeholder.propTypes = {
  messageHeader: PropTypes.string,
  messageParagraph: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  isThereActionButton: PropTypes.bool,
}

export default Placeholder