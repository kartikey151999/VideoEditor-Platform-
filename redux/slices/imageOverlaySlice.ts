import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ImageOverlay {
  id: string
  fileUrl: string
  position: { x: number; y: number }
  size: number // percentage scale
  border: boolean
  opacity: number
}

interface ImageOverlayState {
  overlays: ImageOverlay[]
}

const initialState: ImageOverlayState = {
  overlays: [],
}

const imageOverlaySlice = createSlice({
  name: 'imageOverlay',
  initialState,
  reducers: {
    addImageOverlay(state, action: PayloadAction<ImageOverlay>) {
      state.overlays.push(action.payload)
    },
    updateImageOverlay(state, action: PayloadAction<ImageOverlay>) {
      const idx = state.overlays.findIndex(i => i.id === action.payload.id)
      if (idx !== -1) state.overlays[idx] = action.payload
    },
    deleteImageOverlay(state, action: PayloadAction<string>) {
      state.overlays = state.overlays.filter(i => i.id !== action.payload)
    },
  },
})

export const { addImageOverlay, updateImageOverlay, deleteImageOverlay } = imageOverlaySlice.actions
export default imageOverlaySlice.reducer
