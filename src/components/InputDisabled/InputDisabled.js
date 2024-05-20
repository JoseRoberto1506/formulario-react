import { FormControl, Input, Label } from "./InputDisabledStyle";

export const InputDisabled = ({ id, label, dadoDoCampo }) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} placeholder={dadoDoCampo} disabled />
    </FormControl>
  );
};
