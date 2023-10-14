import React, { useEffect } from 'react'
// IMPORT DATEINPUT
// import DateInput from '../general/DateInput'
import { createTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketCreation'
import DateInput from '../general/DateInput'
import ValidationErrorText from '../../../../Login/ValidationErrorText'
import BlueThemedXtraSm from '../../BlueThemedXtraSm'
import { isValidDateTimeLocal, isValidDate } from '../../../../../../helpers/validation'
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput'
import { useDispatch } from 'react-redux'
import { getTodayAndTomorrow } from '../../../../../../state-manager/reducers/tickets/ticketCreation'

const rightNow = getTodayAndTomorrow().today

const Duration = () => {
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
		} = useCreateTicketInput("startDateTime", isValidDate);

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
		} = useCreateTicketInput("endDateTime", isValidDate);

		const dispatch = useDispatch()

		useEffect(() => {
			dispatch(createTicketActions.updateField({ key: "endDateTime", value: "" }));
		}, [startDateValue]);

		useEffect(() => {
			if(startDateIsValid && endDateIsValid){
				dispatch(
					createTicketActions.updateField({ key: "durationIsValid", value: true })
				);
			}else {
				dispatch(
					createTicketActions.updateField({ key: "durationIsValid", value: false })
				);
			}
		}, [startDateIsValid, endDateIsValid])

		console.log(startDateIsValid, startDateValue, "/////startDateIsValid");

  return (
		<div className="flex items-start justify-start gap-[2.5rem]">
			<div className="min-w-[13rem] flex gap-[0.25rem] flex-col">
				<BlueThemedXtraSm>Start Date</BlueThemedXtraSm>
				<DateInput
					id={startDateId}
					type={"date"}
					min={rightNow}
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
			<div className="min-w-[13rem] flex gap-[0.25rem] flex-col">
				<BlueThemedXtraSm>End Date</BlueThemedXtraSm>
				<DateInput
					id={endDateId}
					type={"date"}
					min={startDateValue}
					onBlur={endDateBlurHandler}
					onChange={endDateChangeHandler}
					placeholder={""}
					value={endDateValue}
					isValid={endDateIsValid}
					disabled={!startDateIsValid}
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