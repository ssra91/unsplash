import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const ContentContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export default ContentContainer;
