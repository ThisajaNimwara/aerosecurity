import { create } from "zustand";

type UiState = {
  docsOpen: boolean;
  setDocsOpen: (open: boolean) => void;
};

export const useUi = create<UiState>((set) => ({
  docsOpen: false,
  setDocsOpen: (docsOpen) => set({ docsOpen }),
}));
