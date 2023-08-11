import React from "react";
import PropTypes from "prop-types";
import { InputButtonWrapper } from "../../atoms/Password/wrappers";
import CustomLabel from "../../atoms/Password/customLabel";
import CustomInput from "../../atoms/Password/customInput";
import CustomButton from "../../atoms/Password/customButton";
import ToolTip from "../../atoms/Password/customInputToolTip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TipNote from "../../atoms/Password/customNote";

const InputButton = ({
  note,
  type,
  butText,
  butType,
  width,
  placeholder,
  label,
  loading,
  empty,
  forgotPasswordError,
  errorMessage,
  handleEmailChange,
  handleFormSubmit,
  serverError,
  defaultCursor,
  serverErrorMessage,
}) => {
  const errorProps = {
    toolTipIcon: <ErrorOutlineIcon className="icon" />,
    toolTipColor: "#D73D3D",
    error: forgotPasswordError || serverError || empty,
  };

  const toolTipText = forgotPasswordError
    ? errorMessage
    : serverError
    ? serverErrorMessage
    : `${label} input field cannot be empty!`;

  return (
    <InputButtonWrapper error={errorProps.error}>
      <div>
        <CustomLabel label={label} />
        <CustomInput
          type={type}
          width={width}
          placeholder={placeholder}
          label={label}
          empty={empty}
          error={errorProps.error}
          errorMessage={toolTipText}
          serverError={serverError}
          defaultCursor={errorProps.error || defaultCursor}
          handleChange={handleEmailChange}
        />

        {errorProps.error && (
          <ToolTip toolTipIcon={errorProps.toolTipIcon} toolTipColor={errorProps.toolTipColor} toolTipText={toolTipText} />
        )}
      </div>
      <div>
        <CustomButton
          butText={butText}
          butType={butType}
          loading={loading}
          error={errorProps.error}
          onClick={handleFormSubmit}
        />
        <TipNote note={note} />
      </div>
    </InputButtonWrapper>
  );
};

InputButton.propTypes = {
  butText: PropTypes.string,
  type: PropTypes.string,
  butType: PropTypes.string,
  note: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  empty: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  forgotPasswordError: PropTypes.bool,
  errorMessage: PropTypes.string,
  serverError: PropTypes.bool,
  defaultCursor: PropTypes.bool,
  serverErrorMessage: PropTypes.string,
  handleEmailChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
};

export default InputButton;
