import React, { FC, ReactNode } from 'react';
import classes from './FormInput.module.scss';
import classnames from 'classnames';

export interface FormInputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  valid?: boolean;
  disabled?: boolean;
  errorMsg: string;
  testId: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
};

export const FormInput: FC<FormInputProps> = ({
  label,
  placeholder,
  name,
  value,
  valid = true,
  disabled = false,
  errorMsg,
  testId,
  onChange,
}) => {
  return (
    <div className={classes.formGroup}>
      <label className={classes.formLabel}>{label}</label>
      <input
        className={classnames(classes.formControl, {[classes.invalid]: !valid})}
        placeholder={placeholder}
        disabled={false}
        type={'text'}
        value={value}
        onChange={(e) => onChange(e, name)}
        data-testid={testId}
      />
      {!valid && <label className={classes.errorLabel}>{errorMsg}</label>}
    </div>
  );
};
