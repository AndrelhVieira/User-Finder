import { ButtonStyled } from "./styles";

const Button = ({ action, children }) => {
  return <ButtonStyled onClick={action}>{children}</ButtonStyled>;
};

export default Button;
