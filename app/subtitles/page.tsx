// app/subtitles/page.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Paintbrush, Plus } from 'lucide-react';

interface SubtitleBlock {
  id: number;
  text: string;
  time: string;
  font: string;
  position: string;
  color: string;
}

export default function SubtitlesPage() {
  const [subtitles, setSubtitles] = useState<SubtitleBlock[]>([]);
  const [input, setInput] = useState('');

  const addSubtitle = () => {
    if (!input) return;
    const newSubtitle: SubtitleBlock = {
      id: Date.now(),
      text: input,
      time: '00:00 - 00:05',
      font: 'Sans',
      position: 'bottom-center',
      color: '#ffffff'
    };
    setSubtitles([...subtitles, newSubtitle]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">💬 Subtitles & Text Overlay</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-xl font-semibold">Add Subtitle Block</h2>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter subtitle text..."
            className="text-black"
          />
          <Button onClick={addSubtitle} className="bg-violet-600 hover:bg-violet-700 rounded-xl">
            <Plus className="h-4 w-4 mr-2" /> Add Subtitle
          </Button>
        </div>

        <div className="space-y-4">
          {subtitles.map((subtitle) => (
            <div
              key={subtitle.id}
              className="p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="flex-1">
                <p className="font-semibold text-lg">🕒 {subtitle.time}</p>
                <p className="text-white">"{subtitle.text}"</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Select defaultValue={subtitle.font}
                 onChange={(value) => {
                  const updatedSubtitles = subtitles.map((sub) =>
                    sub.id === subtitle.id ? { ...sub, font: value } : sub
                  );
                  setSubtitles(updatedSubtitles);
                }}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sans">Sans</SelectItem>
                    <SelectItem value="Serif">Serif</SelectItem>
                    <SelectItem value="Mono">Monospace</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue={subtitle.position}
                 onChange={(value) => {
                  const updatedSubtitles = subtitles.map((sub) =>
                    sub.id === subtitle.id ? { ...sub, font: value } : sub
                  );
                  setSubtitles(updatedSubtitles);
                }}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-left">Top Left</SelectItem>
                    <SelectItem value="top-center">Top Center</SelectItem>
                    <SelectItem value="bottom-center">Bottom Center</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-white text-black px-3 py-2 rounded-xl flex items-center gap-2">
                  <Paintbrush className="h-4 w-4" /> Color
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
