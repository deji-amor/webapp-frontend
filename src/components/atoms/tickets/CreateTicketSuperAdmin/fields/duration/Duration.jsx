import React, { useEffect, useState } from 'react'
// IMPORT DATEINPUT
// import DateInput from '../general/DateInput'
import { createTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketCreation'
import { parse } from 'date-fns';
import DateInput from '../general/DateInput'
import ValidationErrorText from '../../../../Login/ValidationErrorText'
import BlueThemedXtraSm from '../../BlueThemedXtraSm'
import { isValidDateTimeLocal, isValidDate } from '../../../../../../helpers/validation'
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput'
import { useDispatch } from 'react-redux'
import { getTodayAndTomorrow } from '../../../../../../state-manager/reducers/tickets/ticketCreation'

const rightNow = getTodayAndTomorrow().today

export const isDateGreaterThan = (d1, d2) => {
	const FORMAT = 'yyyy-MM-dd'
	const date1 = parse(d1, FORMAT, new Date());
	const date2 = parse(d2, FORMAT, new Date());

	return date1 > date2
}

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
			setErrorMessage: endDateSetErrorMessage,
			hasError: endDateHasError,
			// END DATE
			setHasError: endDateSetHasError,
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

		const [wereBothStartDateAndEndDateValid, setWereBothStartDateAndEndDateValid] = useState(false);

		useEffect(() => {
			if(startDateValue && wereBothStartDateAndEndDateValid && isDateGreaterThan(startDateValue, endDateValue)){
				endDateSetHasError(true)
				endDateSetErrorMessage("End date must be after start date")
				// dispatch(createTicketActions.updateField({ key: "endDateTime", value: "" }));
			}
		}, [startDateValue, endDateValue]);

		useEffect(() => {
			if(startDateIsValid && endDateIsValid){
				setWereBothStartDateAndEndDateValid(true)
				dispatch(
					createTicketActions.updateField({ key: "durationIsValid", value: true })
				);
			}else {
				dispatch(
					createTicketActions.updateField({ key: "durationIsValid", value: false })
				);
			}
		}, [startDateIsValid, endDateIsValid])

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
					hasError={startDateHasError}
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
					hasError={endDateHasError}
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