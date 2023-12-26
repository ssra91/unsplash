import styled from "@emotion/styled";
import TopicsLnb from "@/src/components/Lnb/TopicsLnb";
import SearchLnb from "@/src/components/Lnb/SearchLnb";
import Header from "@/src/components/Header";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Container>
      <Header />
      {(pathname === "/" || pathname === "/topics/[slug]") && <TopicsLnb />}
      {pathname === "/search/[category]/[keyword]" && <SearchLnb />}
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default Layout;
