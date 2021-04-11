import { Field } from 'react-final-form';
import { TextField } from 'ui-neumorphism';

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
