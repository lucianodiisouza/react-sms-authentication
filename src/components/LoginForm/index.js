import InputMask from "react-input-mask";
import { DefaultButton } from "../Button";
import { Form } from "./styles";

const LoginForm = ({ onSignInSubmit, number, setNumber }) => {
  return (
    <Form onSubmit={onSignInSubmit} className="auth-form">
      <div id="recaptcha-container"></div>
      <InputMask
        type="text"
        placeholder="(31) 9 8888-88888"
        mask="(99) 9 9999-9999"
        id="phone-input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <DefaultButton type="submit">Enviar</DefaultButton>
    </Form>
  );
};
export default LoginForm;
