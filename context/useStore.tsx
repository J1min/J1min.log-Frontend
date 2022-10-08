import create from "zustand";
import { UseStoreInterface } from "../interface/context/useStore";

const useStore = create<UseStoreInterface>((set) => ({
  content: "",
  setContent: (input) => set({ content: input }),
}));

export default useStore;
