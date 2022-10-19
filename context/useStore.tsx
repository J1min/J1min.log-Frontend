import create from "zustand";
import { UseStoreType } from "../interface/context";

const useStore = create<UseStoreType>((set) => ({
  content: "",
  setContent: (input) => set({ content: input }),
}));

export default useStore;
