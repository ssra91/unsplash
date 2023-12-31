import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { searchPhotos } from "@/src/api/search";
import PhotosList from "@/src/components/PhotoList";

const SearchPhotos = () => {
  const router = useRouter();
  const query = (router.query.keyword as string) || "";
  const { data } = useQuery(
    ["searchPhotos", query],
    () => searchPhotos({ query, perPage: 30 }),
    {
      staleTime: 1000 * 60 * 30,
      enabled: !!query,
    },
  );
  console.log("@@ data", data);

  if (data?.total === 0) return <p>검색 결과가 없습니다.</p>;

  return (
    <Container>
      <PhotosList data={data?.results ?? []} />
    </Container>
  );
};

const Container = styled.div``;

export default SearchPhotos;
