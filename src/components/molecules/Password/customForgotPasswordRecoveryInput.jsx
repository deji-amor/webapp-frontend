import PropTypes from 'prop-types';
import { InputButtonWrapper } from '../../atoms/Password/wrappers';
import CustomLabel from '../../atoms/Password/customLabel';
import CustomInput from '../../atoms/Password/customInput';
import ToolTip from "../../atoms/Password/customInputToolTip"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const ForgotPasswordRecoveryInput = ({type, width, name, placeholder, label, validators, single, validationError,
                                      forgotPasswordRecoveryError, errorMessage, value, match, currentError, current, 
                                      handleChange, serverRecoveryError, confirm}) => {

  const { hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar } = validators
  
  return (
    <InputButtonWrapper error={forgotPasswordRecoveryError}>
      <div>
        <CustomLabel label={label} />
        <CustomInput 
          type={type}
          width={width}
          placeholder={placeholder}
          label={label}
          name={name}
          currentError={currentError}
          error={forgotPasswordRecoveryError}
          errorMessage={errorMessage}
          serverError={serverRecoveryError}
          handleChange={handleChange} />
          {
            single ?
                
                    !match && confirm.length >= 1 ?
                      <ToolTip 
                      toolTipIcon={<ErrorOutlineIcon className="icon" />} 
                      toolTipText="Password does not match new password entered " 
                      toolTipColor={"#D73D3D"} />
                      :
                      ""
            :
            (value && !match && !currentError ) ?
            <>
                <>
                  <ToolTip 
                      toolTipIcon={hasUpper ? <CheckCircleOutlineIcon className="icon" /> : <HelpOutlineIcon className='icon' />} 
                      toolTipText="Minimum 1 uppercase letter" 
                      toolTipColor={hasUpper? "rgba(18, 133, 37, 0.72)" : ""} />

                  <ToolTip 
                      toolTipIcon={hasLower ? <CheckCircleOutlineIcon className="icon" /> : <HelpOutlineIcon className='icon' />} 
                      toolTipText="Minimum 1 lowercase letter" 
                      toolTipColor={hasLower? "rgba(18, 133, 37, 0.72)" : ""} />

                  <ToolTip 
                      toolTipIcon={hasSymbol ? <CheckCircleOutlineIcon className="icon" /> : <HelpOutlineIcon className='icon' />} 
                      toolTipText="Minimum 1 special letter" 
                      toolTipColor={hasSymbol? "rgba(18, 133, 37, 0.72)" : ""} />

                  <ToolTip 
                      toolTipIcon={hasNumber ? <CheckCircleOutlineIcon className="icon" /> : <HelpOutlineIcon className='icon' />} 
                      toolTipText="Minimum 1 number" 
                      toolTipColor={hasNumber? "rgba(18, 133, 37, 0.72)" : ""} />

                  <ToolTip 
                      toolTipIcon={hasEightChar ? <CheckCircleOutlineIcon className="icon" /> : <HelpOutlineIcon className='icon' />} 
                      toolTipText="Minimum of 8 characters" 
                      toolTipColor={hasEightChar? "rgba(18, 133, 37, 0.72)" : ""} />
                </>
            </>
            :
            validationError ?
            <>
                <ToolTip 
                    toolTipIcon={hasUpper ? <CheckCircleOutlineIcon className="icon" /> : <ErrorOutlineIcon className='icon' />} 
                    toolTipText="Minimum 1 uppercase letter" 
                    toolTipColor={hasUpper? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"} />

                <ToolTip 
                    toolTipIcon={hasLower ? <CheckCircleOutlineIcon className="icon" /> : <ErrorOutlineIcon className='icon' />} 
                    toolTipText="Minimum 1 lowercase letter" 
                    toolTipColor={hasLower? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"} />

                <ToolTip 
                    toolTipIcon={hasSymbol ? <CheckCircleOutlineIcon className="icon" /> : <ErrorOutlineIcon className='icon' />} 
                    toolTipText="Minimum 1 special letter" 
                    toolTipColor={hasSymbol? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"} />

                <ToolTip 
                    toolTipIcon={hasNumber ? <CheckCircleOutlineIcon className="icon" /> : <ErrorOutlineIcon className='icon' />} 
                    toolTipText="Minimum 1 number" 
                    toolTipColor={hasNumber? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"} />

                <ToolTip 
                    toolTipIcon={hasEightChar ? <CheckCircleOutlineIcon className="icon" /> : <ErrorOutlineIcon className='icon' />} 
                    toolTipText="Minimum of 8 characters" 
                    toolTipColor={hasEightChar? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"} />
            </>
            :
            currentError && current.length > 2 ?
                <ToolTip 
                    toolTipIcon={<ErrorOutlineIcon className="icon" />} 
                    toolTipText="New Password is the same as current password " 
                    toolTipColor={"#D73D3D"} />
                :
                ""
          }
        
      </div>
    </InputButtonWrapper>
  )
}

ForgotPasswordRecoveryInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  butText: PropTypes.string,
  type: PropTypes.string,
  butType: PropTypes.string,
  single: PropTypes.bool,
  match: PropTypes.bool,
  validationError: PropTypes.bool,
  note: PropTypes.string,
  confirm: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  validators: PropTypes.object,
  placeholder: PropTypes.string,
  current: PropTypes.string,
  forgotPasswordRecoveryError: PropTypes.bool,
  currentError: PropTypes.bool,
  serverError: PropTypes.bool,
  errorMessage: PropTypes.string,
  serverRecoveryError: PropTypes.bool,
  handleChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
}

export default ForgotPasswordRecoveryInput;