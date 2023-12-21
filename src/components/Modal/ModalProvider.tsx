import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import ModalLayout from "@/src/components/Modal/index";
import { usePreventBodyScroll } from "@/src/hooks/usePreventBodyScroll";
import { useRouter } from "next/router";

interface ContextProps {
  openModal: (el: ReactElement) => void;
  closeModal: () => void;
}
export const ModalContext = createContext<null | ContextProps>(null);

interface Props {
  children: ReactNode;
}
export const ModalProvider = ({ children }: Props) => {
  const router = useRouter();
  const [modals, setModals] = useState<ReactElement[]>([]);

  const hasModal = modals.length > 0;

  usePreventBodyScroll(hasModal);
  const openModal = (element: ReactElement) => {
    setModals((prev) => [...prev, element]);
  };
  const closeModal = () => {
    setModals((prev) => {
      const nextModals = [...prev]; // 원본객체를 뗴면 안되니까 얕은 복사 하고
      nextModals.pop(); // 뒤에꺼 하나 잘라내고
      return nextModals;
    }); // 다시 세팅 해주면 된다.
    window.history.pushState(null, "", router.asPath);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* 모달이 있다면 && 체크는 안해도 되고 맵을 돌리면  된다 왜? */}
      {modals.map((modal, index) => (
        <ModalLayout key={index}>{modal}</ModalLayout>
      ))}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  const value = useContext(ModalContext);
  if (value === null) {
    throw new Error("useModal must be used in Provider");
  }
  return value;
};
