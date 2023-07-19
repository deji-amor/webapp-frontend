import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material'
import { TitleWrapper } from './wrappers';


const Title = ({ title, titleSize, titleColor, align, padding }) => {

  const mquery= useMediaQuery('(max-width: 500px)');

  return (
    <TitleWrapper mquery={mquery} size={titleSize} color={titleColor} align={align} padding={padding}>
        <h2>{title}</h2>
    </TitleWrapper>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    padding: PropTypes.bool,
    titleColor: PropTypes.string,
    titleSize: PropTypes.string,
    align: PropTypes.string
}

export default Title;