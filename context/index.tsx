import create from "zustand";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  content: "",
  setContent: (input: string) => set({ content: input }),
}));

export default useStore;
