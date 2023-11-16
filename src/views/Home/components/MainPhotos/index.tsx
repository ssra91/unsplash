import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "@/src/api/photos";
import PhotosList from "@/src/components/PhotoList";
import ContentContainer from "@/src/components/ContantContainer";

const MainPhotos = () => {
  const { data = [], isLoading } = useQuery(
    ["photos"],
    () => getPhotos({ perPage: 30 }),
    {
      staleTime: 1000 * 60 * 30,
    },
  );

  console.log("@@ data", data);

  if (isLoading) return <p>로딩중...</p>;
  if (data?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;
  return (
    <Container>
      <ContentContainer>
        <PhotosList data={data} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div``;

export default MainPhotos;
