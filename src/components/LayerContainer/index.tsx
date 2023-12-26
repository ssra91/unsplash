import styled from "@emotion/styled";
import { useToastsStore } from "@/src/stores/toastStore";
import React from "react";
import { useDialogStore } from "@/src/stores/dialogStore";

const LayerContainer = () => {
  const { toasts } = useToastsStore();
  const { dialogs } = useDialogStore();
  return (
    <Container>
      {dialogs.map(({ element }, index) => element)}
      {toasts.map(({ element }, index) =>
        React.cloneElement(element, {
          style: {
            bottom: `${index * 50 + 40}px`,
          },
        }),
      )}
    </Container>
  );
};

const Container = styled.div``;

export default LayerContainer;
