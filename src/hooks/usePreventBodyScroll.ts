import { useLayoutEffect } from "react";

export const usePreventBodyScroll = (state: boolean) => {
  useLayoutEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state]);
};
