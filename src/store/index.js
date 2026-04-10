import { create } from 'zustand';

const usePowerStore = create((set) => ({
  // State
  heroName: 'Captain Code',
  power: 'Super Debugging',
  level: 85,
  selectedColor: 'Blue',

  // Actions
  setHeroName: (heroName) => set({ heroName }),
  setPower: (power) => set({ power }),
  setLevel: (level) => set({ level }),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
}));

export default usePowerStore;