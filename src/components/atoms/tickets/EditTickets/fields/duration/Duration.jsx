import React, { useEffect } from 'react'
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition'
import DateInput from '../general/DateInput'
import ValidationErrorText from '../../../../Login/ValidationErrorText'
import BlueThemedXtraSm from '../../../CreateTicketSuperAdmin/BlueThemedXtraSm'
import { isValidDateTimeLocal } from '../../../../../../helpers/validation'
import useEditTicketInput from '../../../../../../hooks/useEditTicketInput'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function getTodayAndTomorrow() {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + 1);

	function formatDate(date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		return `${year}-${month}-${day}T${hours}:${minutes}`;
	}

	return {
		today: formatDate(today),
		tomorrow: formatDate(tomorrow),
	};
}

const rightNow = getTodayAndTomorrow().today

const Duration = () => {
	const { originalTicket} = useSelector((state) => state.ticketEdition);
	const {startDateTime} = originalTicket

    const {
			enteredValue: startDateValue,
			errorMessage: startDateErrorMessage,
			// START DATE
			// setErrorMessage: startDateSetErrorMessage,
			hasError: startDateHasError,
			// START DATE
			// setHasError: startDateSetHasError,
			valueChangeHandler: startDateChangeHandler,
			valueBlurHandler: startDateBlurHandler,
			valueIsValid: startDateIsValid,
			errorFromServer: startDateErrFromServer,
			// START DATE
			// setErrorFromServer: startDateSetErrorFromServer,
			id: startDateId,
			// START DATE
			// reset: startDateReset,
		} = useEditTicketInput("startDateTime", isValidDateTimeLocal);

    const {
			enteredValue: endDateValue,
			errorMessage: endDateErrorMessage,
			// END DATE
			// setErrorMessage: endDateSetErrorMessage,
			hasError: endDateHasError,
			// END DATE
			// setHasError: endDateSetHasError,
			valueChangeHandler: endDateChangeHandler,
			valueBlurHandler: endDateBlurHandler,
			valueIsValid: endDateIsValid,
			errorFromServer: endDateErrFromServer,
			// END DATE
			// setErrorFromServer: endDateSetErrorFromServer,
			id: endDateId,
			// END DATE
			// reset: endDateReset,
		} = useEditTicketInput("endDateTime", isValidDateTimeLocal);

		const dispatch = useDispatch()

		useEffect(() => {
			if(startDateIsValid && endDateIsValid){
				dispatch(
					editTicketActions.updateField({ key: "durationIsValid", value: true })
				);
			}else {
				dispatch(
					editTicketActions.updateField({ key: "durationIsValid", value: false })
				);
			}
		}, [startDateIsValid, endDateIsValid])

  return (
		<div className="flex items-start justify-start gap-[2.5rem]">
			<div className="basis-[2.25rem]">
				<BlueThemedXtraSm>Start Date</BlueThemedXtraSm>
				<DateInput
					id={startDateId}
					type={"datetime-local"}
					min={startDateTime}
					onBlur={startDateBlurHandler}
					onChange={startDateChangeHandler}
					placeholder={""}
					value={startDateValue}
					isValid={startDateIsValid}
				/>
				{startDateHasError && (
					<ValidationErrorText errorFromServer={startDateErrFromServer}>
						{startDateErrorMessage}
					</ValidationErrorText>
				)}
			</div>
			<div className="basis-[2.25rem]">
				<BlueThemedXtraSm>End Date</BlueThemedXtraSm>
				<DateInput
					id={endDateId}
					type={"datetime-local"}
					min={startDateValue}
					onBlur={endDateBlurHandler}
					onChange={endDateChangeHandler}
					placeholder={""}
					value={endDateValue}
					isValid={endDateIsValid}
				/>
				{endDateHasError && (
					<ValidationErrorText errorFromServer={endDateErrFromServer}>
						{endDateErrorMessage}
					</ValidationErrorText>
				)}
			</div>
		</div>
	);
}

export default Duration