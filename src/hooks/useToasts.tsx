import { useToastsStore } from "@/src/stores/toastStore";
import Toast from "@/src/components/Toast";
import { getUUID } from "@/src/utils/uuid";

export type ToastType = "success" | "error" | "warning" | "info";
export interface IToastProps {
  className?: string;
  type: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
}
export const useToasts = () => {
  const { setToast, removeToast } = useToastsStore();
  return {
    openToast: (data: IToastProps) => {
      const key = getUUID();
      setToast(
        <Toast
          key={key}
          type={data.type}
          message={data.message}
          duration={data.duration}
          onClose={() => removeToast(key)}
        />,
      );
    },
  };
};

//
// openToasts({
//     type: "success",
//     title:"블라블라",
//     description: "블랍르라",
// })
