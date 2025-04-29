'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { reorderScenes, removeScene } from '@/redux/slices/timelineSlice'
import { useDrop } from 'react-dnd'
import { useCallback } from 'react'
import DraggableScene from './timline/DraggableScene'

export default function TimelineEditor() {
  const { scenes } = useSelector((state: RootState) => state.timeline)
  const dispatch = useDispatch()

  const moveScene = useCallback((dragIndex: number, hoverIndex: number) => {
    const updated = [...scenes]
    const [removed] = updated.splice(dragIndex, 1)
    updated.splice(hoverIndex, 0, removed)
    dispatch(reorderScenes(updated))
  }, [dispatch, scenes])

  const [, drop] = useDrop(() => ({ accept: 'SCENE' }))

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Timeline Editor</h2>
      <div  ref={(node) => {
           if (node) drop(node);
      }}
        className="flex gap-4 p-4 bg-gray-100 rounded-lg overflow-x-auto">
        {scenes.map((scene, index) => (
          <DraggableScene
            key={scene.id}
            scene={scene}
            index={index}
            moveScene={moveScene}
            onRemove={() => dispatch(removeScene(scene.id))}
          />
        ))}
      </div>
    </div>
  )
}
