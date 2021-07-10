import { FooterContainer } from "./styles";

import Logo from "assets/CompleteLogoUserFinder.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt="User Finder Logo" />
      <h4>Developed by André Luiz Vieira</h4>
    </FooterContainer>
  );
};

export default Footer;
