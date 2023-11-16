import styled from "@emotion/styled";
import { TTopicsItem } from "@/src/models/topics";
import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "@/src/icons";
import { css } from "@emotion/react";
import { UIEvent, useEffect, useRef, useState } from "react";

interface Props {
  data: TTopicsItem[];
}
const ScrollMenu = ({ data }: Props) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  const scrollRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    setMaxScrollLeft(
      scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth,
    );
    const handler = () => {
      if (!scrollRef.current) return;
      setMaxScrollLeft(
        scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth,
      );
    };

    window.addEventListener("resize", handler);

    return () => {
      window.addEventListener("resize", handler);
    };
  }, []);

  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleLeftClick = () => {
    if (!scrollRef.current) return;
    scrollRef.current?.scroll({
      left: scrollLeft - 300,
      behavior: "smooth",
    });
  };
  const handleRightClick = () => {
    if (!scrollRef.current) return;
    scrollRef.current?.scroll({
      left: scrollLeft + 300,
      behavior: "smooth",
    });
  };

  const isStart = scrollLeft === 0;
  const isEnd = scrollLeft >= maxScrollLeft;

  return (
    <Container>
      <ul className="scrollbar-hidden" ref={scrollRef} onScroll={handleScroll}>
        {data.map(({ id, title, slug }) => (
          <li key={id}>
            <NavLink href={`topics/${slug}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
      {!isStart && (
        <>
          <ArrowLeft onClick={handleLeftClick}>
            <IconChevronLeft />
          </ArrowLeft>
          <FogGradient className="left" />
        </>
      )}
      {!isEnd && (
        <>
          <ArrowRight onClick={handleRightClick}>
            <IconChevronRight />
          </ArrowRight>
          <FogGradient className="right" />
        </>
      )}
    </Container>
  );
};
//
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    overflow-x: auto;
    a {
      display: flex;
      align-items: center;
      height: 56px;
    }
  }
`;

const arrowStyle = css`
  position: absolute;
  z-index: 10;
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

const FogGradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  pointer-events: none;
  &.left {
    left: 0;
    background: linear-gradient(270deg, #fff0 0, #fff 90%, #fff);
  }
  &.right {
    right: 0;
    background: linear-gradient(90deg, #fff0 0, #fff 90%, #fff);
  }
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
