import styled from "styled-components";
import { COLORS } from "styles/colors";

export const SearchPageContainer = styled.section`
  height: 100vh;
  background-color: ${COLORS.middleBlue};
  color: ${COLORS.white};
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    font-family: "DM Sans", sans-serif;
    font-size: 1.25rem;
    padding: 10px;
    margin: 10px;
    border: 3px solid ${COLORS.darkBlue};
    color: ${COLORS.white};
    background-color: ${COLORS.darkBlue};
    outline: none;
  }

  & ::placeholder {
    color: ${COLORS.middleBlue};
  }
`;
