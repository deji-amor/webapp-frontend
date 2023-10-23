import React, { useEffect, useState } from "react";
import { editTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketEdition";
import DateInput from "../general/DateInput";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import BlueThemedXtraSm from "../../../CreateTicketSuperAdmin/BlueThemedXtraSm";
import { isValidDate } from "../../../../../../helpers/validation";
import useEditTicketInput from "../../../../../../hooks/useEditTicketInput";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isDateGreaterThan } from "../../../CreateTicketSuperAdmin/fields/duration/Duration";
//COMMENT import { getTodayAndTomorrow } from '../../../../../../state-manager/reducers/tickets/ticketEdition'

//COMMENT const rightNow = getTodayAndTomorrow("yyy-MM-dd").today

const Duration = () => {
	const { originalTicket } = useSelector((state) => state.ticketEdition);
	const { startDateTime } = originalTicket;

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
	} = useEditTicketInput("startDateTime", isValidDate);

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
	} = useEditTicketInput("endDateTime", isValidDate);

	const dispatch = useDispatch();

	const [wereBothStartDateAndEndDateValid, setWereBothStartDateAndEndDateValid] = useState(false);

	useEffect(() => {
		if (
			startDateValue &&
			wereBothStartDateAndEndDateValid &&
			isDateGreaterThan(startDateValue, endDateValue)
		) {
			endDateSetHasError(true);
			endDateSetErrorMessage("End date must be after start date");
			// dispatch(createTicketActions.updateField({ key: "endDateTime", value: "" }));
		}
	}, [startDateValue, endDateValue]);

	useEffect(() => {
		if (startDateIsValid && endDateIsValid) {
			setWereBothStartDateAndEndDateValid(true);
			dispatch(editTicketActions.updateField({ key: "durationIsValid", value: true }));
		} else {
			dispatch(editTicketActions.updateField({ key: "durationIsValid", value: false }));
		}
	}, [startDateIsValid, endDateIsValid]);

	return (
		<div className="flex items-start justify-start gap-[2.5rem]">
			<div className="min-w-[13rem] flex gap-[0.25rem] flex-col">
				<BlueThemedXtraSm>Start Date</BlueThemedXtraSm>
				<DateInput
					id={startDateId}
					type={"date"}
					min={startDateTime}
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
};

export default Duration;
