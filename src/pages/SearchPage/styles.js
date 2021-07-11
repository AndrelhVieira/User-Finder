import styled from "styled-components";
import { COLORS } from "styles/globalStyle";

export const SearchPageContainer = styled.section`
  height: 100vh;
  color: ${COLORS.light};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    border: 3px solid ${COLORS.primaryColor};
    color: ${COLORS.light};
    background-color: ${COLORS.primaryColor};
    outline: none;
  }

  & ::placeholder {
    color: ${COLORS.secondaryColor};
  }
`;
