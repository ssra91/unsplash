import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getRelatedPhotos } from "@/src/api/photos";
import PhotoList from "@/src/components/PhotoList";
import Dot from "@/src/components/Dot";

interface Props {
  id: string;
}
const PhotosRelated = ({ id }: Props) => {
  const { data, isLoading } = useQuery(
    ["photosRelated", id],
    () => getRelatedPhotos(id),
    {
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
    },
  );
  console.log("@@ RELATED-data", data);

  if (isLoading) return <Dot />;
  return (
    <Container>
      <PhotoList data={data?.results} />
    </Container>
  );
};

const Container = styled.div``;

export default PhotosRelated;
