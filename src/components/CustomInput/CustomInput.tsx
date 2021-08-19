import React, { FC, ReactNode } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import useStyles from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import classNames from "classnames";

export interface CustomInputPropTypes {
  labelText?: ReactNode;
  labelProps?: any;
  id?: string;
  inputProps?: any;
  formControlProps?: any;
  error?: boolean;
  success?: boolean;
  rtlActive?: boolean;
}

export const CustomInput: FC<CustomInputPropTypes> = (
  props: CustomInputPropTypes
) => {
  const s = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    rtlActive,
  } = props;

  const labelClasses = classNames({
    [" " + s.labelRootError]: error,
    [" " + s.labelRootSuccess]: success && !error,
    [" " + s.labelRTL]: rtlActive,
  });
  const underlineClasses = classNames({
    [s.underlineError]: error,
    [s.underlineSuccess]: success && !error,
    [s.underline]: true,
  });
  const marginTop = classNames({
    [s.marginTop]: labelText === undefined,
  });
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
    step: inputProps && inputProps.step ? inputProps.step : undefined,
  };
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + s.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={s.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: s.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
        inputProps={newInputProps}
      />
      {error ? (
        <Clear className={s.feedback + " " + s.labelRootError} />
      ) : success ? (
        <Check className={s.feedback + " " + s.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};
