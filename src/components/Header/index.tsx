import styled from "@emotion/styled";
import { IconLogo } from "@/src/icons";
import Link from "next/link";
import SearchBox from "@/src/components/SearchBox";
import Nav from "@/src/components/Header/Nav";

const Header = () => {
  return (
    <Container>
      <Link href="/" className="logo">
        <IconLogo />
      </Link>
      <SearchBox />
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 20px;

  .logo {
    margin-right: 16px;
  }
`;

export default Header;
