import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import ModalLayout from "@/src/components/Modal/index";
import { usePreventBodyScroll } from "@/src/hooks/usePreventBodyScroll";

interface ContextProps {
  openModal: (el: ReactElement) => void;
  closeModal: () => void;
}
export const ModalContext = createContext<null | ContextProps>(null);

interface Props {
  children: ReactNode;
}
export const ModalProvider = ({ children }: Props) => {
  const [modals, setModals] = useState<ReactElement[]>([]);

  const hasModal = modals.length > 0;

  usePreventBodyScroll(hasModal);
  const openModal = (element: ReactElement) => {
    setModals([...modals, element]);
  };
  const closeModal = useCallback(() => {
    const nextModals = [...modals]; // 원본객체를 뗴면 안되니까 얕은 복사 하고
    nextModals.pop(); // 뒤에꺼 하나 잘라내고
    setModals(nextModals); // 다시 세팅 해주면 된다.
  }, [modals]);

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
