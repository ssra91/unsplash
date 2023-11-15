import styled from "@emotion/styled";
import Link from "next/link";
import Button from "@/src/components/Button";
import TextGradient from "@/src/components/TextGradient";
import { IconBars, IconBell } from "@/src/icons";

const Nav = () => {
  return (
    <Container>
      <ul className="links">
        <li>
          <Link href="/advertise">Advertise</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/plus">
            <TextGradient>Unsplash+</TextGradient>
          </Link>
        </li>
      </ul>
      <Button variant="secondary">Submit a Photo</Button>
      <IconButton>
        <IconBell />
      </IconButton>
      <IconButton>
        <IconBars />
      </IconButton>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  .links {
    display: flex;
    gap: 24px;
    padding: 0 16px;
    a {
      display: flex;
      align-items: center;
      height: 40px;
      color: #767676;
      font-weight: 500;
      font-size: 14px;
      &:hover {
        color: #111;
      }
    }
  }
`;
const IconButton = styled.div`
  display: flex;
  align-items: center;
  color: #767676;
  &:hover {
    color: #111;
  }
`;

export default Nav;
