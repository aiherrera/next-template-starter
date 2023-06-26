import { StateCreator } from 'zustand'

export type User = {
  id: string
  email: string
  name: string
  avatar: string
  provider: string
  createdAt: string
  updatedAt: string
}

export type AuthSlice = {
  currentUser: User | null
  setCurrentUser: (user: User) => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = set => ({
  currentUser: null,

  setCurrentUser: user => set(() => ({ currentUser: user })),
})
