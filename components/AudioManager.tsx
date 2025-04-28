'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { toggleMute, addBgMusic } from '@/redux/slices/audioSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AudioManager() {
  const dispatch = useDispatch()
  const { segments, bgMusicFile } = useSelector((state: RootState) => state.audio)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      dispatch(addBgMusic(file))
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Audio Manager</h2>

      <div className="bg-gray-100 rounded p-4">
        <p className="text-gray-700 mb-2">🎧 Audio Segments</p>
        <div className="flex gap-4 flex-wrap">
          {segments.map(seg => (
            <div key={seg.id} className="p-3 bg-white shadow rounded w-[150px]">
              <p className="text-sm font-medium">{seg.label}</p>
              <p className="text-xs text-gray-500">{seg.muted ? 'Muted' : 'Playing'}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => dispatch(toggleMute(seg.id))}
                className="mt-2 w-full"
              >
                {seg.muted ? 'Unmute' : 'Mute'}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-gray-700 mb-2">🎼 Add Background Music</p>
          <Input type="file" accept="audio/*" onChange={handleFileChange} />
          {bgMusicFile && (
            <p className="text-xs text-gray-500 mt-1 truncate">{bgMusicFile.name}</p>
          )}
        </div>

        <div className="mt-6">
          <p className="text-gray-500 italic text-sm">[Mock Waveform Visualization Placeholder]</p>
          <div className="h-12 bg-gradient-to-r from-indigo-200 to-blue-300 rounded mt-1"></div>
        </div>
      </div>
    </div>
  )
}
