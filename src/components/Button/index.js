import { Button } from "./styles";

export const DefaultButton = ({ onClick, type, children }) => (
  <Button type={type} onClick={() => onClick}>
    {children}
  </Button>
);
