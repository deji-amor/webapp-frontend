import PropTypes from 'prop-types';
import { TipNoteWrapper } from './wrappers';

const TipNote = ({note}) => {
  return (
        <TipNoteWrapper>
            <p>Note: {note}</p>
        </TipNoteWrapper>
    )
}

TipNote.propTypes = {
    note: PropTypes.string
}

export default TipNote