import Link from 'next/link'

export default function HomePage() {
  const sections = [
    { name: 'Upload Video', path: '/upload' },
    { name: 'Video Timeline', path: '/timeline' },
    { name: 'Audio Manager', path: '/audio' },
    { name: 'Subtitles & Text', path: '/subtitles' },
    { name: 'Image Overlay', path: '/overlay' },
    { name: 'Preview & Export', path: '/preview' },
  ]

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎬 Web Video Editing Platform</h1>
      <p className="text-gray-600 mb-8">
        Select a step below to edit your video. You can upload files, trim scenes, manage audio, add subtitles, overlay images, and preview your final result.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map(section => (
          <Link
            key={section.path}
            href={section.path}
            className="block border border-gray-200 hover:border-blue-500 p-5 rounded-lg shadow transition-all bg-white"
          >
            <h2 className="text-xl font-semibold">{section.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{section.path}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
