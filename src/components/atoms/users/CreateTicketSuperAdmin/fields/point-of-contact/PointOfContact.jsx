import React from 'react'
import PropTypes from 'prop-types'
import GrayThemedLightText from '../../GrayThemedLightText'
import useBasicInput from '../../../../../../hooks/useBasicInput'
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput'
import GrayThemedLighterText from '../../GrayThemedLighterText'
import GrayThemedLightestText from '../../GrayThemedLightestText'
import Input from '../general/Input'
import TextArea from '../general/TextArea'
import { useSelector } from 'react-redux'

const PointOfContact = props => {
    // const {
		// 	enteredValue: passwordValue,
		// 	errorMessage: passwordErrorMessage,
		// 	setErrorMessage: passwordSetErrorMessage,
		// 	hasError: passwordHasError,
		// 	setHasError: passwordSetHasError,
		// 	valueChangeHandler: passwordChangeHandler,
		// 	valueBlurHandler: passwordBlurHandler,
		// 	valueIsValid: passwordIsValid,
		// 	errorFromServer: passwordErrFromServer,
		// 	setErrorFromServer: passwordSetErrorFromServer,
		// 	id: passwordId,
		// 	reset: passwordReset,
		// } = useBasicInput(isNotEmpty);

  //  <div className="">
	// 						<InputLabel htmlFor={usernameId}>Username</InputLabel>
	// 						<Input
	// 							placeholder="Type your registered email"
	// 							type="text"
	// 							value={usernameValue}
	// 							onBlur={usernameBlurHandler}
	// 							onChange={usernameChangeHandler}
	// 							hasError={usernameHasError}
	// 							id={usernameId}
	// 						/>
	// 						{usernameHasError && (
	// 							<ValidationErrorText errorFromServer={usernameErrFromServer}>
	// 								{usernameErrorMessage}
	// 							</ValidationErrorText>
	// 						)}
	// 					</div>;

	const t = useSelector(state => state.ticketCreation)
	console.log(t);

  return (
		<div className='space-y-[0.75rem]'>
			<div className="">
				<GrayThemedLightestText>Point of contact</GrayThemedLightestText>
			</div>
			<div className="flex items-start justify-start gap-[0.75rem]">
				<div className="basis-[21rem]">
					<GrayThemedLighterText>Name*</GrayThemedLighterText>
          <Input id={"yvvvu"} type={"text"} onBlur={() => {}} onChange={() => {}} placeholder={"Enter contact name"} value={""}/>
				</div>
				<div className="basis-[21rem]">
					<GrayThemedLighterText>Phone Number*</GrayThemedLighterText>
          <Input id={"yvvvu"} type={"text"} onBlur={() => {}} onChange={() => {}} placeholder={"Enter contact phone number"} value={""}/>
				</div>
			</div>
      <div className=''>
        <GrayThemedLighterText>Address of contact*</GrayThemedLighterText>
        <div className='w-[30rem] h-[6.25rem]'>
          <TextArea placeholder={"Enter address"}/>
        </div>
      </div>
		</div>
	);
}

PointOfContact.propTypes = {}

export default PointOfContact