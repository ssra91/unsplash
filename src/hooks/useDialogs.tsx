import { getUUID } from "@/src/utils/uuid";
import { useDialogStore } from "@/src/stores/dialogStore";
import Dialog from "@/src/components/Dialog";

export interface IDialogProps {
  className?: string;
  title?: string;
  description?: string;
  confirmText: string;
  onConfirm: () => void;
  cancelText?: string;
  onCancel?: () => void;
  onClose?: () => void;
}
export const useDialog = () => {
  const { setDialog, removeDialog } = useDialogStore();
  return {
    openDialog: (props: IDialogProps) => {
      const key = getUUID();
      setDialog(<Dialog key={key} {...props} onClose={removeDialog} />);
    },
    closeDialog: removeDialog,
  };
};
