import styled from "@emotion/styled";
import ScrollMenu from "@/src/components/ScrollMenu";
import { useRouter } from "next/router";

interface Props {
  query: string;
}

const SearchHeader = ({ query }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <h1>{router.query.keyword}</h1>
      <ScrollMenu data={[]} />
    </Container>
  );
};

const Container = styled.div`
  padding: 56px 0 72px;
  h1 {
    font-size: 46px;
    color: #111;
  }
`;

export default SearchHeader;
