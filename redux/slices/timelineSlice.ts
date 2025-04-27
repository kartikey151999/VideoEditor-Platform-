import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Scene {
  id: string
  label: string
  start: number
  end: number
}

interface TimelineState {
  scenes: Scene[]
}

const initialState: TimelineState = {
  scenes: [
    { id: '1', label: 'Scene 1', start: 0, end: 5 },
    { id: '2', label: 'Scene 2', start: 5, end: 10 },
    { id: '3', label: 'Scene 3', start: 10, end: 15 },
  ],
}

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    reorderScenes(state, action: PayloadAction<Scene[]>) {
      state.scenes = action.payload
    },
    removeScene(state, action: PayloadAction<string>) {
      state.scenes = state.scenes.filter(scene => scene.id !== action.payload)
    },
  },
})

export const { reorderScenes, removeScene } = timelineSlice.actions
export default timelineSlice.reducer
