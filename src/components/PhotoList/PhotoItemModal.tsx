import styled from "@emotion/styled";

const PhotoItemModal = () => {
  return (
    <>
      <Container>PhotoItemModal</Container>
      <Dim />
    </>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: #000;
`;
const Dim = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default PhotoItemModal;
