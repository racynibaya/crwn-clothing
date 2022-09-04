import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, ...otherOptions }) => {
  return (
    <Group>
      <Input {...otherOptions} />
      {label && (
        <FormInputLabel shrink={otherOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
