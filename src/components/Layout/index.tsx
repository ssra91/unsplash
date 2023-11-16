import styled from "@emotion/styled";
import TopicsLnb from "@/src/components/Lnb/TopicsLnb";
import SearchLnb from "@/src/components/Lnb/SearchLnb";
import Header from "@/src/components/Header";
import { useRouter } from "next/router";

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
      {pathname === "/search/photos/[keyword]" && <SearchLnb />}
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default Layout;
