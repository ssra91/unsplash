import { ReactElement } from "react";
import { create } from "zustand";

export interface DialogType {
  element: ReactElement;
}
interface DialogStore {
  dialogs: DialogType[];
  setDialog: (element: ReactElement) => void;
  removeDialog: () => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialogs: [],
  setDialog: (element: ReactElement) => {
    set((state) => ({
      ...state,
      dialogs: [...state.dialogs, { element }],
    }));
  },
  removeDialog: () => {
    set((state) => {
      const dialogs = [...state.dialogs];
      dialogs.pop();
      return {
        ...state,
        dialogs,
      };
    });
  },
}));
