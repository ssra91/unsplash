import styled from "@emotion/styled";
import { TTopicsItem } from "@/src/models/topics";
import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "@/src/icons";
import { css } from "@emotion/react";

interface Props {
  data: TTopicsItem[];
}
const ScrollMenu = ({ data }: Props) => {
  return (
    <Container>
      <ArrowLeft>
        <IconChevronLeft />
      </ArrowLeft>
      <ul className="scrollbar-hidden">
        {data.map(({ id, title, slug }) => (
          <li key={id}>
            <NavLink href={`t/${slug}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
      <ArrowRight>
        <IconChevronRight />
      </ArrowRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    overflow-x: auto;
  }
`;

const arrowStyle = css`
  position: absolute;
  padding: 4px;
`;
const ArrowLeft = styled.button`
  ${arrowStyle};
  left: 0;
`;
const ArrowRight = styled.button`
  ${arrowStyle};
  right: 0;
`;

const NavLink = styled(Link)`
  font-size: 14px;
  color: #767676;
  &:hover {
    color: #111;
  }
  white-space: nowrap;
`;

export default ScrollMenu;
