'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { addSubtitle, deleteSubtitle, updateSubtitle } from '@/redux/slices/subtitleSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function SubtitleEditor() {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.subtitles)

  const [text, setText] = useState('')
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(2)
  const [fontSize, setFontSize] = useState(16)
  const [color, setColor] = useState('#ffffff')
  const [position, setPosition] = useState('bottom-center')

  const handleAdd = () => {
    dispatch(addSubtitle({
      id: uuid(),
      text,
      start,
      end,
      style: { fontSize, color, position }
    }))
    setText('')
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Subtitle & Text Overlay</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded">
        <Input value={text} onChange={e => setText(e.target.value)} placeholder="Subtitle text" />
        <div className="flex gap-2">
          <Input type="number" value={start} onChange={e => setStart(+e.target.value)} placeholder="Start time" />
          <Input type="number" value={end} onChange={e => setEnd(+e.target.value)} placeholder="End time" />
        </div>
        <Input type="number" value={fontSize} onChange={e => setFontSize(+e.target.value)} placeholder="Font size" />
        <Input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <select value={position} onChange={e => setPosition(e.target.value)} className="p-2 rounded border text-sm">
          <option value="bottom-center">Bottom Center</option>
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
        </select>

        <Button onClick={handleAdd} className="md:col-span-2">Add Subtitle</Button>
      </div>

      <div className="mt-6 space-y-3">
        {items.map(sub => (
          <div key={sub.id} className="bg-white rounded shadow p-3 flex justify-between items-center">
            <div>
              <p className="font-medium text-sm">{sub.text}</p>
              <p className="text-xs text-gray-500">From {sub.start}s to {sub.end}s</p>
              <p className="text-xs text-gray-400">Style: {sub.style.fontSize}px {sub.style.color} at {sub.style.position}</p>
            </div>
            <Button variant="destructive" size="sm" onClick={() => dispatch(deleteSubtitle(sub.id))}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
