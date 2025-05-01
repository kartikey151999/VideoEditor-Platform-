// app/audio/page.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { fakeProcessing } from '@/utils/mockApi';
import { Loader2, Volume2, VolumeX } from 'lucide-react';

interface AudioClip {
  id: number;
  label: string;
  muted: boolean;
}

export default function AudioPage() {
  const [clips, setClips] = useState<AudioClip[]>([
    { id: 1, label: '🎙️ Voiceover 1', muted: false },
    { id: 2, label: '🎵 Music Track', muted: false },
    { id: 3, label: '🌲 Ambient FX', muted: false },
  ]);

  const [loading, setLoading] = useState(false);

  const toggleMute = (id: number) => {
    setClips(prev =>
      prev.map(c => (c.id === id ? { ...c, muted: !c.muted } : c))
    );
  };

  const simulateAddMusic = async () => {
    setLoading(true);
    await fakeProcessing(2000);
    setClips([...clips, { id: Date.now(), label: '🎧 New BGM', muted: false }]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">🎚️ Audio Management</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {clips.map((clip) => (
          <div key={clip.id} className="p-6 border border-gray-700 bg-gray-800 rounded-2xl shadow-xl hover:border-violet-600 transition">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{clip.label}</p>
              <Button
                onClick={() => toggleMute(clip.id)}
                className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm ${clip.muted ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {clip.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />} {clip.muted ? 'Unmute' : 'Mute'}
              </Button>
            </div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${clip.muted ? 'bg-gray-500' : 'bg-violet-500'}`}
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button
          onClick={simulateAddMusic}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3 text-lg"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" /> Adding Music...
            </span>
          ) : (
            '➕ Add Background Music'
          )}
        </Button>
      </div>
    </div>
  );
}
