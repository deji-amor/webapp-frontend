import React, { useEffect } from 'react'
import { createTicketActions } from '../../../../../../state-manager/reducers/users/ticketCreation';
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isScopeOfWorkEmpty } from "../../../../../../helpers/validation";
import { isValidFile } from '../../../../../../helpers/validation';
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import TextArea from "../general/TextArea";
import BlueThemeSmall from '../../BlueThemedSmall';
import BlueThemedLightText from '../../BlueThemedLightText';
import BlueThemedMediumText from '../../BlueThemedMediumText';
import BlueThemedXtraSm from '../../BlueThemedXtraSm';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector, useDispatch } from 'react-redux';

const ScopeOfWork = () => {
    const {
			enteredValue: scopeOfWorkValue,
			errorMessage: scopeOfWorkErrorMessage,
			setErrorMessage: scopeOfWorkSetErrorMessage,
			hasError: scopeOfWorkHasError,
			setHasError: scopeOfWorkSetHasError,
			valueChangeHandler: scopeOfWorkChangeHandler,
			valueBlurHandler: scopeOfWorkBlurHandler,
			valueIsValid: scopeOfWorkIsValid,
			errorFromServer: scopeOfWorkErrFromServer,
			setErrorFromServer: scopeOfWorkSetErrorFromServer,
			id: scopeOfWorkId,
			reset: scopeOfWorkReset,
		} = useCreateTicketInput("scopeOfWorkDescription", isScopeOfWorkEmpty);

    const dispatch = useDispatch()
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
    const scopeOfWorkDocument = allPossibleFields.scopeOfWorkDocument;

    // console.log(scopeOfWorkDocument);

    const onDocumentChange = (event) => {
      const selectedFile = event.target.files[0]; // The selected file is the first element in the "files" array
      if (selectedFile) {
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

		return (
			<div className="">
				<div className="flex items-center justify-start gap-[1rem] mb-[0.5rem]">
					<GrayThemedLighterText>Scope of work*</GrayThemedLighterText>
					<label className="cursor-pointer" htmlFor="scope-of-work-document">
						{validDocument ? (
							<BlueThemedXtraSm>{scopeOfWorkDocument.name}</BlueThemedXtraSm>
						) : (
							<BlueThemedXtraSm>
								Attach Document (5mb max) <AttachFileIcon className="rotate-45" fontSize="small" />{" "}
							</BlueThemedXtraSm>
						)}
					</label>
					<input
						onChange={onDocumentChange}
						type="file"
						className="hidden"
						id="scope-of-work-document"
						accept=".pdf, .doc, .docx, .xls, .xlsx"
						max="5242880" // 5mb in size
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