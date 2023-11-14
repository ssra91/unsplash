import "../styles/reset.css";
import type { AppProps } from "next/app";
import Header from "@/src/components/Header";
import styled from "@emotion/styled";
import TopicsLnb from "@/src/components/Lnb/TopicsLnb";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <TopicsLnb />
      <Component {...pageProps} />
    </Container>
  );
}

const Container = styled.div``;
