import { FooterContainer } from "./styles";

import Logo from "assets/CompleteLogoUserFinder.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt="User Finder Logo" />
      <h4>
        Developed by{" "}
        <a href="https://andreluizv.dev.br" target="_blank" rel="noreferrer">
          André Luiz Vieira
        </a>
      </h4>
    </FooterContainer>
  );
};

export default Footer;
