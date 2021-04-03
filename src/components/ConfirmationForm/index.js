import { DefaultButton } from "../Button";
import { Container } from "./styles";

const ConfirmationForm = ({ validateCode, code, setCode }) => {
  return (
    <Container>
      <p>Digite o código enviado:</p>
      <input
        maxLength={6}
        minLength={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <DefaultButton onClick={validateCode}>Conferir</DefaultButton>
    </Container>
  );
};

export default ConfirmationForm;
