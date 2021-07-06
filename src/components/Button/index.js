import { ButtonStyled } from "./styles";

const Button = ({ action, isDark, children }) => {
  return (
    <ButtonStyled onClick={action} isDark={isDark}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
