import styled from "@emotion/styled";
import ScrollMenu from "@/src/components/ScrollMenu";

interface Props {
  keyword: string;
}

const SearchHeader = ({ keyword }: Props) => {
  return (
    <Container>
      <h1>{keyword}</h1>
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
