// app/image-overlay/page.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImagePlus, Move, Sparkles } from 'lucide-react';

export default function ImageOverlayPage() {
  const [image, setImage] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(100);
  const [border, setBorder] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">🖼️ Image Overlay</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-xl font-semibold">Upload Overlay Image</h2>
          <Input type="file" accept="image/*" onChange={handleImageUpload} className="bg-white text-black" />
        </div>

        {image && (
          <div className="bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center gap-6">
            <img
              src={image}
              alt="Overlay"
              className={`max-w-xs rounded-lg transition-all duration-300 ${border ? 'border-4 border-white' : ''}`}
              style={{ opacity: opacity / 100 }}
            />

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div>
                <label className="block mb-1 font-medium">Opacity: {opacity}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-48"
                />
              </div>

              <Button onClick={() => setBorder(!border)} variant="outline" className="text-cyan-400 border-cyan-400">
                <Sparkles className="h-4 w-4 mr-2" /> {border ? 'Remove Border' : 'Add Border'}
              </Button>

              <Button variant="secondary" className="text-pink-500">
                <Move className="h-4 w-4 mr-2" /> Drag Mode (Mock)
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
