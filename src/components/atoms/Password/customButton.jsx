import PropTypes from 'prop-types';
import { ButtonWrapper } from "./wrappers"


const CustomButton = ({butText, butWidth, butType, error, onClick}) => {
  return (
    <ButtonWrapper width={butWidth}>
        <button disabled={error} onClick={onClick} type={butType}>{butText}</button>
    </ButtonWrapper>
  )
}

CustomButton.propTypes = {
    butText: PropTypes.string,
    butType: PropTypes.string,
    butWidth: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    error: PropTypes.bool
}

export default CustomButton;