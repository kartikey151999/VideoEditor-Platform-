import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Subtitle {
  id: string
  text: string
  start: number
  end: number
  style: {
    fontSize: number
    color: string
    position: string // e.g., "top-left"
  }
}

interface SubtitlesState {
  items: Subtitle[]
}

const initialState: SubtitlesState = {
  items: [],
}

const subtitlesSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    addSubtitle(state, action: PayloadAction<Subtitle>) {
      state.items.push(action.payload)
    },
    updateSubtitle(state, action: PayloadAction<Subtitle>) {
      const idx = state.items.findIndex(s => s.id === action.payload.id)
      if (idx !== -1) state.items[idx] = action.payload
    },
    deleteSubtitle(state, action: PayloadAction<string>) {
      state.items = state.items.filter(s => s.id !== action.payload)
    },
  },
})

export const { addSubtitle, updateSubtitle, deleteSubtitle } = subtitlesSlice.actions
export default subtitlesSlice.reducer
