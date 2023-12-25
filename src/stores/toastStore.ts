import { create } from "zustand";
import { ReactElement } from "react";

interface ToastType {
  element: ReactElement;
}

interface ToastStore {
  toasts: ToastType[];
  setToast: (element: ReactElement) => void;
  removeToast: (key: string) => void;
}

export const useToastsStore = create<ToastStore>((set) => ({
  toasts: [],
  // 인자로 받는건 리액트 엘리먼트 <div>
  setToast: (element: ReactElement) => {
    set((state) => ({
      // ...state: 기존 스테이트를 받고 풀어쓰고 , Toasts, openToasts,closeToasts 다 들어있다.
      ...state,
      // ...state안에있는 toasts를 풀어 써주고, 새로추가된 toasts
      toasts: [...state.toasts, { element }],
    }));
  },
  removeToast: (key: string) => {
    set((state) => ({
      ...state,
      toasts: state.toasts.filter(({ element }) => element.key !== key),
    }));
  },
}));

// const handleClick = () => {
//     openToast(<div>hello</div>)
// }
