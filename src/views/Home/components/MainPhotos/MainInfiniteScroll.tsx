import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  length: number;
  onNext: () => void;
}
const MainInfiniteScroll = ({ children, length, onNext }: Props) => {
  const detectorRef = useRef<HTMLDivElement | null>(null);

  const options: IntersectionObserverInit = {
    root: null, // root 는 화면
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    // early return
    if (detectorRef.current === null) return;
    const callback: IntersectionObserverCallback = (nodes) => {
      nodes.forEach((entry) => {
        if (entry.isIntersecting && length > 0) {
          onNext();
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(detectorRef.current);

    return () => {
      if (detectorRef.current === null) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(detectorRef.current);
    };
  }, [onNext]);

  return (
    <Container>
      {children}
      <Detector ref={detectorRef} />
    </Container>
  );
};

const Container = styled.div``;

const Detector = styled.div`
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
`;

export default MainInfiniteScroll;
