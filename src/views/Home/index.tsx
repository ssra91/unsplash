import styled from "@emotion/styled";
import MainBanner from "@/src/views/Home/components/MainBanner";
import MainPhotos from "@/src/views/Home/components/MainPhotos";

const Home = () => {
  return (
    <Container>
      <MainBanner />
      <MainPhotos />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
