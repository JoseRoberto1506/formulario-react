import { FormControl, Input, Label, MensagemDeErro } from "./InputFieldStyle";

export const InputField = ({
  label,
  id,
  type,
  placeholder,
  value,
  salvarEstado,
  esconderErro,
  mensagemDeErro,
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => salvarEstado(e.target.value)}
      />
      <MensagemDeErro hidden={esconderErro}>{mensagemDeErro}</MensagemDeErro>
    </FormControl>
  );
};
