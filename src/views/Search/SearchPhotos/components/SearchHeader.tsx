import styled from "@emotion/styled";
import ScrollMenu from "@/src/components/ScrollMenu";
import { useQuery } from "@tanstack/react-query";
import { searchAll } from "@/src/api/search";

interface Props {
  query: string;
}

const SearchHeader = ({ query }: Props) => {
  const { data } = useQuery(
    ["searchAll", query],
    () => searchAll({ query }),
    {},
  );

  return (
    <Container>
      <h1>{query}</h1>
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
