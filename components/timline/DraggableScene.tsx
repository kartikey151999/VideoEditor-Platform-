'use client'

import { useDrag, useDrop } from 'react-dnd'
import { Scene } from '@/redux/slices/timelineSlice'
import { Button } from '@/components/ui/button'

type Props = {
  scene: Scene
  index: number
  moveScene: (dragIndex: number, hoverIndex: number) => void
  onRemove: () => void
}

export default function DraggableScene({ scene, index, moveScene, onRemove }: Props) {
  const [{ isDragging }, drag] = useDrag({
    type: 'SCENE',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: 'SCENE',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveScene(item.index, index)
        item.index = index
      }
    },
  })

  return (
    <div
      ref={(node) =>{if (node) drag(drop(node));  
      }}
      className={`p-3 min-w-[100px] bg-white rounded shadow-md text-center transition-opacity ${
        isDragging ? 'opacity-30' : 'opacity-100'
      }`}
    >
      <p className="text-sm font-medium">{scene.label}</p>
      <p className="text-xs text-gray-500">{scene.start}s → {scene.end}s</p>
      <Button
        variant="destructive"
        size="sm"
        onClick={onRemove}
        className="mt-2 w-full text-xs"
      >
        Cut
      </Button>
    </div>
  )
}
