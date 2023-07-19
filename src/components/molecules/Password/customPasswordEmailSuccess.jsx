import PropTypes from 'prop-types';
import HeaderContent from './customHeaderSection'
import { HeaderContentWrapper as ForgotPasswordSuccessWrapper } from '../../atoms/Password/wrappers';

const PasswordSuccess = ({title, icon, iconSize, iconColor, description, titleSize, size, desWidth, color, padding}) => {
  return (
    <ForgotPasswordSuccessWrapper>
      <HeaderContent icon={icon} iconColor={iconColor} padding={padding} title={title} iconSize={iconSize} description={description} titleSize={titleSize} size={size} desWidth={desWidth} color={color} />
    </ForgotPasswordSuccessWrapper>
  )
}

PasswordSuccess.propTypes = {
  title: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.element,
  iconSize: PropTypes.string,
  description: PropTypes.string,
  titleSize: PropTypes.string,
  size: PropTypes.string,
  desWidth: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.bool
}

export default PasswordSuccess