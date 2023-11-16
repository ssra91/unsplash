import styled from "@emotion/styled";
import { useRouter } from "next/router";

const SearchPhotosPage = () => {
  const router = useRouter();
  return <Container>{router.query.keyword}</Container>;
};

const Container = styled.div``;

export default SearchPhotosPage;
