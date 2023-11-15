import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const TextGradient = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #fa00ff, #00e0ff 50%, #fa00ff);
  background-clip: text;
  background-size: 500%;
  -webkit-background-clip: text;
  color: transparent;
`;

export default TextGradient;
