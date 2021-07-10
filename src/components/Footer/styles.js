import styled from "styled-components";
import { COLORS } from "styles/colors";

export const FooterContainer = styled.section`
  padding: 10px;
  margin-top: 25px;

  & img {
    width: 75%;
    max-width: 296px;
    margin: auto;
  }

  & a {
    text-decoration: none;
    color: ${COLORS.darkBlue};
  }
`;
