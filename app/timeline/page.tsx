// app/timeline/page.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GripVertical, Scissors, Trash2 } from 'lucide-react';

interface SceneSegment {
  id: number;
  label: string;
}

export default function TimelinePage() {
  const [segments, setSegments] = useState<SceneSegment[]>([
    { id: 1, label: '🎬 Intro Scene' },
    { id: 2, label: '🎤 Interview Clip' },
    { id: 3, label: '🏞️ B-Roll Footage' },
  ]);

  const deleteSegment = (id: number) => {
    setSegments(prev => prev.filter(seg => seg.id !== id));
  };

  const cutSegment = (id: number) => {
    const segment = segments.find(seg => seg.id === id);
    if (segment) {
      const newSeg: SceneSegment = {
        id: Date.now(),
        label: `${segment.label} (Cut)`
      };
      setSegments(prev => [...prev, newSeg]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">🧩 Video Timeline</h1>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-fit px-2">
          {segments.map(segment => (
            <div
              key={segment.id}
              className="min-w-[220px] h-40 bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 flex flex-col justify-between hover:border-violet-600 transition"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <GripVertical className="h-4 w-4 text-gray-400" />
                {segment.label}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => cutSegment(segment.id)}
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-500/10"
                >
                  <Scissors className="h-4 w-4 mr-1" /> Cut
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => deleteSegment(segment.id)}
                  className="text-red-400 border-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
