import { useEffect, useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { InputDisabled } from "./components/InputDisabled/InputDisabled";
import { Body, Container, Form, FormButton } from "./style";

function App() {
  // Estados dos campos de input
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Estados das mensagens de erro dos campos de input
  const [esconderErroNome, setEsconderErroNome] = useState(true);
  const [esconderErroCPF, setEsconderErroCPF] = useState(true);
  const [esconderErroEmail, setEsconderErroEmail] = useState(true);
  const [esconderErroSenha, setEsconderErroSenha] = useState(true);
  const [esconderErroConfirmarSenha, setEsconderErroConfirmarSenha] =
    useState(true);

  // Estado do botão do formulário principal
  const [desabilitarBotao, setDisabledBotao] = useState(true);

  // Estado da visibilidade dos formulários
  const [esconderPrimeiroForm, setEsconderPrimeiroForm] = useState(false);
  const [esconderSegundoForm, setEsconderSegundoForm] = useState(true);

  useEffect(() => {
    const nomeValido = nome !== "";
    setEsconderErroNome(nomeValido);
  }, [nome]);

  useEffect(() => {
    const cpfValido = /^[0-9]{11}$/.test(cpf);
    setEsconderErroCPF(cpfValido);
  }, [cpf]);

  useEffect(() => {
    const emailValido = email !== "";
    setEsconderErroEmail(emailValido);
  }, [email]);

  useEffect(() => {
    const senhaValida = senha.length >= 6;
    const confirmacaoValida = confirmarSenha === senha;
    setEsconderErroSenha(senhaValida);
    setEsconderErroConfirmarSenha(confirmacaoValida);
  }, [senha, confirmarSenha]);

  useEffect(() => {
    const camposValidos =
      esconderErroNome &&
      esconderErroEmail &&
      esconderErroSenha &&
      esconderErroConfirmarSenha;
    setDisabledBotao(!camposValidos);
  }, [
    esconderErroNome,
    esconderErroEmail,
    esconderErroSenha,
    esconderErroConfirmarSenha,
  ]);

  const limparPrimeiroForm = () => {
    setNome("");
    setEmail("");
    setCPF("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <Body>
      <Container>
        <Form hidden={esconderPrimeiroForm}>
          <InputField
            label="Nome"
            id="nome"
            type="text"
            placeholder="Digite seu nome ..."
            value={nome}
            salvarEstado={setNome}
            esconderErro={esconderErroNome}
            mensagemDeErro={"Nome inválido"}
          />
          <InputField
            label="CPF"
            id="cpf"
            type="text"
            placeholder="Digite seu CPF (apenas números) ..."
            value={cpf}
            salvarEstado={setCPF}
            esconderErro={esconderErroCPF}
            mensagemDeErro={"CPF inválido"}
          />
          <InputField
            label="Email"
            id="email"
            type="text"
            placeholder="Digite seu email ..."
            value={email}
            salvarEstado={setEmail}
            esconderErro={esconderErroEmail}
            mensagemDeErro={"Email inválido"}
          />
          <InputField
            label="Senha"
            id="senha"
            type="password"
            placeholder="Digite sua senha ..."
            value={senha}
            salvarEstado={setSenha}
            esconderErro={esconderErroSenha}
            mensagemDeErro={"A senha deve ter no mínimo 6 caracteres"}
          />
          <InputField
            label="Confirmação da senha"
            id="confirmar-senha"
            type="password"
            placeholder="Confirme sua senha ..."
            value={confirmarSenha}
            salvarEstado={setConfirmarSenha}
            esconderErro={esconderErroConfirmarSenha}
            mensagemDeErro={"As senhas não coincidem"}
          />
          <FormButton
            type="button"
            disabled={desabilitarBotao}
            onClick={() => {
              setEsconderPrimeiroForm(true);
              setEsconderSegundoForm(false);
            }}
          >
            Enviar
          </FormButton>
        </Form>

        <Form hidden={esconderSegundoForm}>
          <InputDisabled label="Nome" id="nome" dadoDoCampo={nome} />
          <InputDisabled label="CPF" id="cpf" dadoDoCampo={cpf} />
          <InputDisabled label="Email" id="email" dadoDoCampo={email} />
          <FormButton
            type="button"
            onClick={() => {
              limparPrimeiroForm();
              setEsconderSegundoForm(true);
              setEsconderPrimeiroForm(false);
            }}
          >
            Voltar
          </FormButton>
        </Form>
      </Container>
    </Body>
  );
}

export default App;
