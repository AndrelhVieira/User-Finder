import styled from "styled-components";
import { COLORS } from "styles/globalStyle";

import Modal from "@material-ui/core/Modal";

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCardContainer = styled.section`
  max-width: 396px;
  margin: 10px;
  background-color: ${COLORS.primaryColor};
  padding: 10px;

  & p {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & button {
    align-items: center;
    margin: 5px;
    width: 100%;

    & i {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 396px) {
    flex-direction: row;
    justify-content: center;
  }
`;
