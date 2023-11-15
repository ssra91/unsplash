import styled from "@emotion/styled";
import SearchBox from "@/src/components/SearchBox";

const MainBanner = () => {
  return (
    <Container>
      <Overlay />
      <Contents>
        <h1>Unsplash</h1>
        <p>
          The internet’s source for visuals.
          <br /> Powered by creators everywhere.
        </p>
        <SearchBox shape="square" />
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  background: #fff
    url("https://plus.unsplash.com/premium_photo-1674332001678-ddf674fbf7df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80")
    50% / cover no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Contents = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  max-width: 880px;
  padding: 0 20px;

  h1 {
    font-size: 46px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
`;

export default MainBanner;
