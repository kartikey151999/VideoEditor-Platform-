// app/preview/page.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Download } from 'lucide-react';
import { fakeProcessing } from '@/utils/mockApi';

export default function PreviewPage() {
  const [loading, setLoading] = useState(false);
  const [rendered, setRendered] = useState(false);

  const handleRender = async () => {
    setLoading(true);
    await fakeProcessing(3000);
    setLoading(false);
    setRendered(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">🎬 Preview & Export Your Video</h1>

      <div className="bg-gray-900 w-full max-w-5xl aspect-video mx-auto rounded-2xl border-2 border-violet-700 shadow-xl overflow-hidden">
        <video
          controls
          className="w-full h-full object-contain rounded-2xl"
          poster="/placeholder.jpg"
        >
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button
          onClick={handleRender}
          disabled={loading || rendered}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-lg px-6 py-3 rounded-full shadow-md"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" /> Rendering...
            </span>
          ) : rendered ? 'Rendered ✔' : '🚀 Render Final Video'}
        </Button>

        {rendered && (
          <Button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-6 py-3 rounded-full shadow-md flex items-center gap-2"
          >
            <Download className="h-5 w-5" /> Download Export
          </Button>
        )}
      </div>
    </div>
  );
}
