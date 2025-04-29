'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { addImageOverlay, deleteImageOverlay , ImageOverlay} from '@/redux/slices/imageOverlaySlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Key, useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function ImageOverlayEditor() {
  const dispatch = useDispatch()
  const overlays = useSelector((state: RootState) => state.imageOverlay.overlays)

  const [fileUrl, setFileUrl] = useState('')
  const [size, setSize] = useState(100)
  const [border, setBorder] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setFileUrl(url)
    }
  }

  const handleAdd = () => {
    dispatch(
      addImageOverlay({
        id: uuid(),
        fileUrl,
        position: { x: 50, y: 50 },
        size,
        border,
        opacity,
      })
    )
    setFileUrl('')
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Image Overlay</h2>

      <div className="bg-gray-100 rounded p-4 grid gap-3">
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        <Input type="range" min={10} max={200} value={size} onChange={e => setSize(+e.target.value)} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={border} onChange={e => setBorder(e.target.checked)} />
          Add border
        </label>
        <Input type="range" min={0.1} max={1} step={0.1} value={opacity} onChange={e => setOpacity(+e.target.value)} />
        <Button onClick={handleAdd}>Add Image Overlay</Button>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {overlays.map((overlay: ImageOverlay) => (
          <div key={overlay.id} className="relative bg-white rounded shadow p-2">
            <img
              src={overlay.fileUrl}
              alt="overlay"
              style={{
                width: `${overlay.size}px`,
                opacity: overlay.opacity,
                border: overlay.border ? '2px solid #000' : 'none',
              }}
              className="mx-auto"
            />
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-1 right-1"
              onClick={() => dispatch(deleteImageOverlay(overlay.id))}
            >
              ✕
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
