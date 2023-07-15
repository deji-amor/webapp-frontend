import React from 'react';
import CustomLabel from '../atoms/Label';
import CustomInput from '../atoms/Input';

const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div>
      <CustomLabel text={label} />
      <CustomInput type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
