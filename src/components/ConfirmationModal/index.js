import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "components/Button";
import { ModalStyled, ModalCardContainer, ButtonDiv } from "./styles";

const ConfirmationModal = ({ search, action, deleteAll }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button action={handleOpen} isDark={deleteAll}>
        <i className="far fa-trash-alt"></i>
        {deleteAll ? "Clear History" : "Remove search"}
      </Button>
      <ModalStyled
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalCardContainer>
            {deleteAll ? (
              <p>Are you sure you want to delete all searches from history?</p>
            ) : (
              <p>Are you sure you want to delete this search from history?</p>
            )}
            <ButtonDiv>
              <Button
                action={() => {
                  action(search);
                  handleClose();
                }}
              >
                <i class="fas fa-check"></i>
                Yes
              </Button>
              <Button action={handleClose}>
                <i class="fas fa-times"></i>
                No
              </Button>
            </ButtonDiv>
          </ModalCardContainer>
        </Fade>
      </ModalStyled>
    </div>
  );
};

export default ConfirmationModal;
