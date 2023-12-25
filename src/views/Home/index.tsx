import styled from "@emotion/styled";
import MainBanner from "@/src/views/Home/components/MainBanner";
import MainPhotos from "@/src/views/Home/components/MainPhotos";
import { useToasts } from "@/src/hooks/useToasts";

const Home = () => {
  const { openToast } = useToasts();

  return (
    <Container>
      <MainBanner />
      <button
        onClick={() =>
          openToast({
            type: "success",
            message: "Hellooooooooo",
            duration: 1500,
          })
        }
      >
        토스트!!!!!!
      </button>
      <button
        onClick={() =>
          openToast({
            type: "success",
            message: "Hellooooooooo",
            duration: 10000,
          })
        }
      >
        토스트!!!!!!
      </button>
      <MainPhotos />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
