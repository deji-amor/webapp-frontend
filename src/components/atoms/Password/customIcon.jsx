import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material'
import { IconWrapper } from "./wrappers"


const Icon = ({ icon, iconSize, iconColor, align, style, spanStyle, onClick, width }) => {

  const mquery= useMediaQuery('(max-width: 500px)');

  return (
    <IconWrapper mquery={mquery} size={iconSize} style={style} color={iconColor} align={align} spanStyle={spanStyle} width={width} >
        <span onClick={onClick}>{icon}</span>
    </IconWrapper>
  )
}

Icon.propTypes = {
    width: PropTypes.string,
    icon: PropTypes.element,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    align: PropTypes.string,
    style: PropTypes.object,
    spanStyle: PropTypes.object,
    onClick: PropTypes.func
}

export default Icon;