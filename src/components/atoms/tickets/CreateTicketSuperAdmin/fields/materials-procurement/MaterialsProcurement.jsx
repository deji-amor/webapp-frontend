import React from 'react'
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isMaterialEmpty } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import TextArea from "../general/TextArea";

const MaterialsProcurement = () => {
    const {
			enteredValue: materialValue,
			errorMessage: materialErrorMessage,
			// MATERIAL
			// setErrorMessage: materialSetErrorMessage,
			hasError: materialHasError,
			// MATERIAL
			// setHasError: materialSetHasError,
			valueChangeHandler: materialChangeHandler,
			valueBlurHandler: materialBlurHandler,
			valueIsValid: materialIsValid,
			errorFromServer: materialErrFromServer,
			// MATERIAL
			// setErrorFromServer: materialSetErrorFromServer,
			id: materialId,
			// MATERIAL
			// reset: materialReset,
		} = useCreateTicketInput("materialsDescription", isMaterialEmpty);

  return (
		<div className="">
			<div className="mb-[0.5rem]">
				<GrayThemedLighterText>Materials Procurement*</GrayThemedLighterText>
			</div>
			<div className="w-[30rem] h-[6.25rem]">
				<TextArea
					id={materialId}
					onBlur={materialBlurHandler}
					onChange={materialChangeHandler}
					value={materialValue}
					placeholder={"Enter description..."}
					resizable={false}
					isValid={materialIsValid}
				/>
			</div>
			{materialHasError && (
				<ValidationErrorText errorFromServer={materialErrFromServer}>
					{materialErrorMessage}
				</ValidationErrorText>
			)}
		</div>
	);
}

export default MaterialsProcurement