import "../styles/reset.css";
import { AppProps } from "next/app";
import styled from "@emotion/styled";

import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Layout from "@/src/components/Layout";
import { ModalProvider } from "@/src/components/Modal/ModalProvider";
import LayerContainer from "@/src/components/LayerContainer";

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
          <ModalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ModalProvider>
          <LayerContainer />
        </Hydrate>
      </QueryClientProvider>
    </Container>
  );
}

const Container = styled.div``;
