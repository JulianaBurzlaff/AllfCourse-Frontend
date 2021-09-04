import React, { useContext } from 'react';
import { WarningContext } from '../../providers/WarningProvider';
import Container from '../Container';
import warningIcon from '../../assets/icons/warning.svg';
import ButtonIcon from '../ButtonIcon';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import confirmBlackIcon from '../../assets/icons/confirm-black.svg';
import * as S from './styles';

function WarningModal({ message, confirmOnclick }) {
  const { modalWarning, handleSetModalWarningClose } =
    useContext(WarningContext);

  return (
    <S.ModalContainer
      open={modalWarning}
      onClose={() => {
        handleSetModalWarningClose();
      }}
      aria-labelledby="add-module-modal"
    >
      <S.ModalContent>
        <Container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="400px"
        >
          <S.Icon src={warningIcon} />
          <S.Text>{message}</S.Text>
        </Container>
        <Container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          margin="20px 0 0 0"
        >
          <ButtonIcon
            icon={confirmBlackIcon}
            color="neutral"
            onClick={confirmOnclick}
            margin="2px 10px"
          >
            Sim
          </ButtonIcon>
          <ButtonIcon
            icon={cancelWhiteIcon}
            color="secondary"
            margin="2px 10px"
            onClick={() => {
              handleSetModalWarningClose();
            }}
          >
            Cancelar
          </ButtonIcon>
        </Container>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default WarningModal;
