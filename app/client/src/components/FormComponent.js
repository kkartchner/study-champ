import { Field } from 'react-final-form';
import { TextField, ToggleButtonGroup } from 'ui-neumorphism';

export const NTextField = ({ name, label, type }) => (
  <Field name={name}>
    {({ input, meta, ...rest }) => (
      <TextField
        label={label}
        {...input}
        {...rest}
        type={type}
        onChange={event => {
          input.onChange(event.value);
        }}
      />
    )}
  </Field>
);

export const NToggleButtonGroup = ({
  name,
  label,
  multiple,
  children,
  ...inputProps
}) => (
  <Field name={name}>
    {({ input, meta, ...fieldProps }) => (
      <ToggleButtonGroup
        {...input}
        {...fieldProps}
        {...inputProps}
        multiple={multiple}
        onChange={e => {
          input.onChange(e.active);
        }}
      >
        {children}
      </ToggleButtonGroup>
    )}
  </Field>
);
