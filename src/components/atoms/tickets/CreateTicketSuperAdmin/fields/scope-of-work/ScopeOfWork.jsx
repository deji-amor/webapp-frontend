import React, { useEffect } from 'react'
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isScopeOfWorkEmpty, isValidFile } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import TextArea from "../general/TextArea";
import BlueThemedXtraSm from '../../BlueThemedXtraSm';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from 'react-redux';

const ScopeOfWork = () => {
    const {
			enteredValue: scopeOfWorkValue,
			errorMessage: scopeOfWorkErrorMessage,
// SCOPE
			// setErrorMessage: scopeOfWorkSetErrorMessage,
			hasError: scopeOfWorkHasError,
// SCOPE
			// setHasError: scopeOfWorkSetHasError,
			valueChangeHandler: scopeOfWorkChangeHandler,
			valueBlurHandler: scopeOfWorkBlurHandler,
			valueIsValid: scopeOfWorkIsValid,
			errorFromServer: scopeOfWorkErrFromServer,
// SCOPE
			// setErrorFromServer: scopeOfWorkSetErrorFromServer,
			id: scopeOfWorkId,
// SCOPE
			// reset: scopeOfWorkReset,
		} = useCreateTicketInput("scopeOfWorkDescription", isScopeOfWorkEmpty);

    const dispatch = useDispatch()
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
    const scopeOfWorkDocument = allPossibleFields.scopeOfWorkDocument;
    const onDocumentChange = (event) => {
      const selectedFile = event.target.files[0]; 
// SCOPE
	// The selected file is the first element in the "files" array
      if (selectedFile) {
// SCOPE
        // Do something with the selected file (e.g., read its content, upload it, etc.)
        console.log("Selected file:", selectedFile);
        dispatch(createTicketActions.updateField({ key: "scopeOfWorkDocument", value: selectedFile }));
      } else {
        console.log("No file selected.");
        dispatch(createTicketActions.updateField({ key: "scopeOfWorkDocument", value: null }));
      }
    }

		let validDocument = isValidFile(scopeOfWorkDocument)

		useEffect(() => {
			dispatch(createTicketActions.updateField({ key: "scopeOfWorkDocumentIsValid", value: validDocument }));
		}, [validDocument, dispatch])

		const removeFileIcon = () => {
			dispatch(createTicketActions.updateField({ key: "scopeOfWorkDocument", value: null }));
		}

		return (
			<div className="">
				<div className="flex items-center justify-start gap-[1rem] mb-[0.5rem]">
					<GrayThemedLighterText>Scope of work*</GrayThemedLighterText>
						{validDocument ? (
							<BlueThemedXtraSm>
								{scopeOfWorkDocument.name} <RemoveCircleOutlineIcon onClick={removeFileIcon} className="cursor-pointer" fontSize="medium" />{" "}
							</BlueThemedXtraSm>
						) : (
						<label className="cursor-pointer" htmlFor="scope-of-work-document">
							<BlueThemedXtraSm>
								Attach Document (10mb max) <AttachFileIcon className="rotate-45" fontSize="small" />{" "}
							</BlueThemedXtraSm>
					</label>
						)}
					<input
						onChange={onDocumentChange}
						type="file"
						className="hidden"
						id="scope-of-work-document"
						accept=".pdf, .doc, .docx, .xls, .xlsx"
						max="10485760" // 5mb in size
					/>
				</div>
				<div className="w-[30rem] h-[6.25rem]">
					<TextArea
						id={scopeOfWorkId}
						onBlur={scopeOfWorkBlurHandler}
						onChange={scopeOfWorkChangeHandler}
						value={scopeOfWorkValue}
						placeholder={"Enter description..."}
						resizable={false}
						isValid={scopeOfWorkIsValid}
					/>
				</div>
				{scopeOfWorkHasError && (
					<ValidationErrorText errorFromServer={scopeOfWorkErrFromServer}>
						{scopeOfWorkErrorMessage}
					</ValidationErrorText>
				)}
			</div>
		);
}

export default ScopeOfWork