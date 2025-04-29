import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './slices/videoSlice'
import timelineReducer from './slices/timelineSlice'
import audioReducer from './slices/audioSlice'
import subtitleReducer from './slices/subtitleSlice'
import overlayReducer from './slices/imageOverlaySlice'
import imageOverlayReducer from './slices/imageOverlaySlice'

export const store = configureStore({
  reducer: {
    video: videoReducer,
    timeline: timelineReducer,
    audio: audioReducer,
    subtitles: subtitleReducer,
    overlay: overlayReducer,
    imageOverlay: imageOverlayReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
