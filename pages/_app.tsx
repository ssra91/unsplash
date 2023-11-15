import "../styles/reset.css";
import { AppProps } from "next/app";
import Header from "@/src/components/Header";
import styled from "@emotion/styled";
import TopicsLnb from "@/src/components/Lnb/TopicsLnb";

import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  );

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <TopicsLnb />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Container>
  );
}

const Container = styled.div``;
