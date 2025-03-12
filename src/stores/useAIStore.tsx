import { create } from 'zustand';

type AIStoreType = {
  isThinking: boolean;
  setIsThinking: (isThinking: boolean) => void;
};

const useAIStore = create<AIStoreType>((set) => ({
  isThinking: true,
  setIsThinking: (isThinking) => set({ isThinking }),
}));

export { useAIStore };
export type { AIStoreType };
