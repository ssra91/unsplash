import styled from "@emotion/styled";
import { useToastsStore } from "@/src/stores/toastStore";
import React from "react";

const LayerContainer = () => {
  const { toasts } = useToastsStore();
  return (
    <Container>
      {toasts.map(({ element }, index) =>
        React.cloneElement(element, {
          style: {
            color: "red",
            bottom: `${index * 50 + 40}px`,
          },
        }),
      )}
    </Container>
  );
};

const Container = styled.div``;

export default LayerContainer;
