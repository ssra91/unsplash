import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "@/src/api/photos";

const MainPhotos = () => {
  const { data, isLoading } = useQuery(
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
      {/* eslint-disable-next-line camelcase */}
      {data?.map(({ id, urls, alt_description }) => (
        // eslint-disable-next-line camelcase,@next/next/no-img-element
        <img key={id} src={urls.regular} alt={alt_description} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export default MainPhotos;
