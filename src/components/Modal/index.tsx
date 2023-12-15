import styled from "@emotion/styled";
import { ReactElement } from "react";
import { IconX } from "@/src/icons";
import { useModal } from "@/src/components/Modal/ModalProvider";

interface Props {
  children: ReactElement;
}
const ModalLayout = ({ children }: Props) => {
  const { closeModal } = useModal();
  return (
    <Container>
      <ModalContainer>
        <ButtonModalClose onClick={closeModal}>
          <IconX />
        </ButtonModalClose>
        <ModalContent>{children}</ModalContent>
        <Screen onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  z-index: 10
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px 120px 100px;
`;
const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: zoom-out;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 30px;
  border-radius: 9px;
  background-color: #fff;
  z-index: 10;
`;

const ButtonModalClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  z-index: 10;
`;
export default ModalLayout;
