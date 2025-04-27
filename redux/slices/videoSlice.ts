import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideoState {
  file: File | null
  previewURL: string | null
  uploadProgress: number
}

const initialState: VideoState = {
  file: null,
  previewURL: null,
  uploadProgress: 0,
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoFile(state, action: PayloadAction<File>) {
      state.file = action.payload
      state.previewURL = URL.createObjectURL(action.payload)
    },
    setUploadProgress(state, action: PayloadAction<number>) {
      state.uploadProgress = action.payload
    },
    resetVideo(state) {
      state.file = null
      state.previewURL = null
      state.uploadProgress = 0
    },
  },
})

export const { setVideoFile, setUploadProgress, resetVideo } = videoSlice.actions
export default videoSlice.reducer
