import React from 'react'
import { createTicketActions } from '../../../../../../state-manager/reducers/users/ticketCreation';
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isScopeOfWorkEmpty } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import TextArea from "../general/TextArea";
import BlueThemeSmall from '../../BlueThemedSmall';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector, useDispatch } from 'react-redux';

function isValidDocumentObject(variable) {
	return typeof variable === "object" && variable !== null && Object.keys(variable).length !== 0;
}

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

    let validDocument = isValidDocumentObject(scopeOfWorkDocument)
    console.log(validDocument);

		return (
			<div className="">
				<div className="flex items-center justify-start gap-[1rem]">
					<GrayThemedLighterText>Scope of work*</GrayThemedLighterText>
					<label className="cursor-pointer" htmlFor="scope-of-work-document">
            {
              (validDocument) ? <BlueThemeSmall>{scopeOfWorkDocument.name}</BlueThemeSmall> : 
              <BlueThemeSmall>
                Attach Document <AttachFileIcon className="rotate-45" />{" "}
              </BlueThemeSmall>
            }
					</label>
					<input
            onChange={onDocumentChange}
						type="file"
						className="hidden"
						id="scope-of-work-document"
						accept=".pdf, .doc, .docx, .xls, .xlsx"
					/>
				</div>
				<div className="w-[30rem] h-[6.25rem]">
					<TextArea
						id={scopeOfWorkId}
						onBlur={scopeOfWorkBlurHandler}
						onChange={scopeOfWorkChangeHandler}
						value={scopeOfWorkValue}
						placeholder={"Enter description..."}
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