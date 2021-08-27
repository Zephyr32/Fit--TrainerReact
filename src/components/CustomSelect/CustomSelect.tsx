import React, { FC, ReactNode } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select, { SelectProps } from "@material-ui/core/Select";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import useStyles from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import classNames from "classnames";
import { MenuItem } from "@material-ui/core";

export interface CustomSelectPropTypes extends SelectProps {
  labelText?: ReactNode;
  labelProps?: any;
  id?: string;
  inputProps?: any;
  formControlProps?: any;
  error?: boolean;
  success?: boolean;
  selectOptions: {
    name: string;
    value: any;
  }[];
}

export const CustomSelect: FC<CustomSelectPropTypes> = (
  props: CustomSelectPropTypes
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
    selectOptions,
  } = props;

  const labelClasses = classNames({
    [" " + s.labelRootError]: error,
    [" " + s.labelRootSuccess]: success && !error,
  });
  const marginTop = classNames({
    [s.marginTop]: labelText === undefined,
  });
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
      <Select
        classes={{
          root: marginTop,
          disabled: s.disabled,
        }}
        id={id}
        {...inputProps}
      >
        {selectOptions.map((option, index) => {
          return (
            <MenuItem value={option.value} key={index}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
      {error ? (
        <Clear className={s.feedback + " " + s.labelRootError} />
      ) : success ? (
        <Check className={s.feedback + " " + s.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};
