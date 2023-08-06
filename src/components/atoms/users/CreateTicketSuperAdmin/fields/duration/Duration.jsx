import React from 'react'
// import DateInput from '../general/DateInput'
import DateInput from '../general/DateInput'
import ValidationErrorText from '../../../../Login/ValidationErrorText'
import BlueThemedXtraSm from '../../BlueThemedXtraSm'
import { isValidDateTimeLocal } from '../../../../../../helpers/validation'
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput'

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

const Duration = () => {
    const {
			enteredValue: startDateValue,
			errorMessage: startDateErrorMessage,
			setErrorMessage: startDateSetErrorMessage,
			hasError: startDateHasError,
			setHasError: startDateSetHasError,
			valueChangeHandler: startDateChangeHandler,
			valueBlurHandler: startDateBlurHandler,
			valueIsValid: startDateIsValid,
			errorFromServer: startDateErrFromServer,
			setErrorFromServer: startDateSetErrorFromServer,
			id: startDateId,
			reset: startDateReset,
		} = useCreateTicketInput("startDateTime", isValidDateTimeLocal);

    // console.log(startDateValue);

    const {
			enteredValue: endDateValue,
			errorMessage: endDateErrorMessage,
			setErrorMessage: endDateSetErrorMessage,
			hasError: endDateHasError,
			setHasError: endDateSetHasError,
			valueChangeHandler: endDateChangeHandler,
			valueBlurHandler: endDateBlurHandler,
			valueIsValid: endDateIsValid,
			errorFromServer: endDateErrFromServer,
			setErrorFromServer: endDateSetErrorFromServer,
			id: endDateId,
			reset: endDateReset,
		} = useCreateTicketInput("endDateTime", isValidDateTimeLocal);

  return (
		<div className="flex items-start justify-start gap-[2.5rem]">
			<div className="basis-[2.25rem]">
				<BlueThemedXtraSm>Start Date</BlueThemedXtraSm>
				<DateInput
					id={startDateId}
					type={"datetime-local"}
					min={getTodayAndTomorrow().today}
					onBlur={startDateBlurHandler}
					onChange={startDateChangeHandler}
					placeholder={""}
					value={startDateValue}
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
					min={getTodayAndTomorrow().today}
					onBlur={endDateBlurHandler}
					onChange={endDateChangeHandler}
					placeholder={""}
					value={endDateValue}
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