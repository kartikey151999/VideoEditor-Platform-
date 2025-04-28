import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AudioSegment {
  id: string
  label: string
  muted: boolean
}

interface AudioState {
  segments: AudioSegment[]
  bgMusicFile: File | null
}

const initialState: AudioState = {
  segments: [
    { id: '1', label: 'Narration', muted: false },
    { id: '2', label: 'Sound FX', muted: false },
  ],
  bgMusicFile: null,
}

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    toggleMute(state, action: PayloadAction<string>) {
      const seg = state.segments.find(s => s.id === action.payload)
      if (seg) seg.muted = !seg.muted
    },
    addBgMusic(state, action: PayloadAction<File>) {
      state.bgMusicFile = action.payload
    },
  },
})

export const { toggleMute, addBgMusic } = audioSlice.actions
export default audioSlice.reducer
