import styled from "@emotion/styled";
import { css } from "@emotion/react";

type DotType = "fixed" | "absolute";
const Dot = ({ type }: { type?: DotType }) => {
  return (
    <Container type={type}>
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </Container>
  );
};

const Container = styled.div<{ type?: DotType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ type }) => type};
  ${({ type }) =>
    type &&
    css`
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `}
  .dots {
    display: flex;
    align-items: center;
    gap: 8px;
    .dit {
      width: 6px;
      height: 6px;
      background-color: #ccc;
      border-radius: 50%;
    }
  }
`;

export default Dot;
