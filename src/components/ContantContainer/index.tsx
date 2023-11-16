import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}
const ContentContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default ContentContainer;
