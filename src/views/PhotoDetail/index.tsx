import styled from "@emotion/styled";
import { useModal } from "@/src/components/Modal/ModalProvider";

interface Props {
  id: string;
}

const InnerModal = () => {
  const { closeModal } = useModal();
  return <div onClick={closeModal}>내부모달</div>;
};
const PhotoDetail = ({ id }: Props) => {
  const { openModal, closeModal } = useModal();
  const handleInnerModalOpen = () => {
    openModal(<InnerModal />);
  };
  return (
    <Container>
      {id}
      PhotoDetail
      <button onClick={handleInnerModalOpen}>내부팝업</button>
      <div className="btn-close" onClick={closeModal}>
        X
      </div>
    </Container>
  );
};

const Container = styled.div`
  .btn-close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default PhotoDetail;
