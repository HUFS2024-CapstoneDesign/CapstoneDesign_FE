import React from 'react';
import Input from './style.js';

const BasicInput = ({size,shape,variant,children,...rest}) => {
  return (
    <Input size = {size} shape = {shape} variant = {variant} {...rest}>
      {children}
    </Input>
  );
};

export default BasicInput;