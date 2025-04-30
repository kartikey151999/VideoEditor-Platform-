'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function PreviewPanel() {
  const uploaded = useSelector((state: RootState) => state.video.uploadedFile)
  const [isRendering, setIsRendering] = useState(false)
  const [isRendered, setIsRendered] = useState(false)

  const startRender = () => {
    setIsRendering(true)
    setTimeout(() => {
      setIsRendering(false)
      setIsRendered(true)
    }, 3000) // simulate 3s render
  }

  const handleDownload = () => {
    alert('🎉 Simulating download of final video!')
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Preview & Export</h2>

      {!uploaded ? (
        <p className="text-sm text-gray-500">Upload a video first to preview.</p>
      ) : (
        <div className="rounded border p-4 space-y-4 bg-gray-100">
          <video
            src={URL.createObjectURL(uploaded)}
            controls
            className="w-full rounded shadow"
          />

          <div className="flex gap-4">
            <Button
              onClick={startRender}
              disabled={isRendering || isRendered}
            >
              {isRendering ? 'Rendering...' : isRendered ? 'Rendered' : 'Render Video'}
            </Button>
            <Button
              onClick={handleDownload}
              disabled={!isRendered}
              variant="outline"
            >
              Download Export
            </Button>
          </div>

          {isRendering && (
            <div className="text-sm text-blue-500 animate-pulse">Rendering in progress...</div>
          )}
        </div>
      )}
    </div>
  )
}
