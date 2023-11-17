import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "@/src/api/photos";
import ContentContainer from "@/src/components/ContantContainer";
import MainInfiniteScroll from "@/src/views/Home/components/MainPhotos/MainInfiniteScroll";
import { useEffect, useState } from "react";
import { TPhotoItem } from "@/src/models/photos";
import PhotosList from "@/src/components/PhotoList";

const MainPhotos = () => {
  const [photos, setPhotos] = useState<TPhotoItem[]>([]);
  const [page, setPage] = useState(1);

  const { data = [] } = useQuery(
    ["photos", page],
    () => getPhotos({ page, perPage: 10 }),
    {
      staleTime: 1000 * 60 * 30,
    },
  );

  const handleNext = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    setPhotos([...photos, ...data]);
  }, [data]);

  if (photos?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;
  return (
    <Container>
      <ContentContainer>
        <MainInfiniteScroll onNext={handleNext} length={photos.length}>
          <PhotosList data={photos} />
        </MainInfiniteScroll>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;

export default MainPhotos;
