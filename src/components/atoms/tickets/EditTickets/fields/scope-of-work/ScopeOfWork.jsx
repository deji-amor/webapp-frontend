import React, { useEffect } from 'react'
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition';
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isScopeOfWorkEmpty, isValidFile } from "../../../../../../helpers/validation";
import useEditTicketInput from '../../../../../../hooks/useEditTicketInput';
import GrayThemedLighterText from "../../../CreateTicketSuperAdmin/GrayThemedLighterText";
import TextArea from "../general/TextArea";
import BlueThemedXtraSm from '../../../CreateTicketSuperAdmin/BlueThemedXtraSm';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from 'react-redux';
import { extractCleanFilenameFromUrl } from '../../../../../organisms/tickets/View/Details/components/Attachments';

const ScopeOfWork = () => {
    const {
			enteredValue: scopeOfWorkValue,
			errorMessage: scopeOfWorkErrorMessage,
			hasError: scopeOfWorkHasError,
			valueChangeHandler: scopeOfWorkChangeHandler,
			valueBlurHandler: scopeOfWorkBlurHandler,
			valueIsValid: scopeOfWorkIsValid,
			errorFromServer: scopeOfWorkErrFromServer,
			id: scopeOfWorkId,
		} = useEditTicketInput("scopeOfWorkDescription", isScopeOfWorkEmpty);

    const dispatch = useDispatch()
    const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
    const scopeOfWorkDocument = allPossibleFields.scopeOfWorkDocument;
		const scopeOfWorkDocumentUrl = allPossibleFields.scopeOfWorkDocumentUrl;
		// console.log({scopeOfWorkDocumentUrl});

    const onDocumentChange = (event) => {
      const selectedFile = event.target.files[0]; 
      if (selectedFile) {
        console.log("Selected file:", selectedFile);
        dispatch(editTicketActions.updateField({ key: "scopeOfWorkDocument", value: selectedFile }));
      } else {
        console.log("No file selected.");
        dispatch(editTicketActions.updateField({ key: "scopeOfWorkDocument", value: null }));
      }
    }

		let validDocument = isValidFile(scopeOfWorkDocument)

		useEffect(() => {
			dispatch(editTicketActions.updateField({ key: "scopeOfWorkDocumentIsValid", value: validDocument }));
		}, [validDocument, dispatch])

		const removeFileIcon = () => {
			dispatch(editTicketActions.updateField({ key: "scopeOfWorkDocument", value: null }));
		}

		return (
			<div className="">
				<div className="flex items-center justify-start gap-[1rem] mb-[0.5rem]">
					<GrayThemedLighterText>Scope of work*</GrayThemedLighterText>
					{validDocument ? (
						<BlueThemedXtraSm className="max-w-[15rem] overflow-ellipsis">
							<span className="max-w-[1rem] truncate">
								{scopeOfWorkDocument.name
									? scopeOfWorkDocument.name
									: extractCleanFilenameFromUrl(scopeOfWorkDocumentUrl)}
							</span>
							<RemoveCircleOutlineIcon
								onClick={removeFileIcon}
								className="cursor-pointer"
								fontSize="medium"
							/>{" "}
						</BlueThemedXtraSm>
					) : (
						<label
							className="cursor-pointer max-w-[25rem] truncate"
							htmlFor="scope-of-work-document"
						>
							<BlueThemedXtraSm className="max-w-[15rem] overflow-ellipsis">
								{scopeOfWorkDocumentUrl
									? extractCleanFilenameFromUrl(scopeOfWorkDocumentUrl)
									: "Attach Document (10mb max)"}
								<AttachFileIcon className="rotate-45" fontSize="small" />{" "}
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