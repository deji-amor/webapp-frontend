import React from 'react';
import CustomButton from '../atoms/Button';
import CustomIcon from '../atoms/Icon';

const IconButton = ({ text, icon, onClick }) => {
  return (
    <CustomButton text={text} onClick={onClick} startIcon={<CustomIcon name={icon} />} />
  );
};

export default IconButton;
