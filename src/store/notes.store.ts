import { create } from 'zustand'
import { Memorie } from '../dto/Memmorie'

type NoteStates = {
  notes: Memorie[];
  addNotes: (item: Memorie) => void;
}

export const useNoteStore = create<NoteStates>((set) => ({
  notes: [],
  addNotes: (item) => set((state) => ({ notes: [...state.notes, item] }))
}))