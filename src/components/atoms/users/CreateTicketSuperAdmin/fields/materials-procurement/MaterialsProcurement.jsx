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
			setErrorMessage: materialSetErrorMessage,
			hasError: materialHasError,
			setHasError: materialSetHasError,
			valueChangeHandler: materialChangeHandler,
			valueBlurHandler: materialBlurHandler,
			valueIsValid: materialIsValid,
			errorFromServer: materialErrFromServer,
			setErrorFromServer: materialSetErrorFromServer,
			id: materialId,
			reset: materialReset,
		} = useCreateTicketInput("materialsDescription", isMaterialEmpty);

  return (
		<div className="">
			<GrayThemedLighterText>Materials Procurement*</GrayThemedLighterText>
			<div className="w-[30rem] h-[6.25rem]">
				<TextArea
					id={materialId}
					onBlur={materialBlurHandler}
					onChange={materialChangeHandler}
					value={materialValue}
					placeholder={"Enter description..."}
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