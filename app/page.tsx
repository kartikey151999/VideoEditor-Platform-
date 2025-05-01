import Link from 'next/link'

const sections = [
  { name: 'Upload Video', path: '/upload' },
  { name: 'Video Timeline', path: '/timeline' },
  { name: 'Audio Manager', path: '/audio' },
  { name: 'Subtitles & Text', path: '/subtitles' },
  { name: 'Image Overlay', path: '/overlay' },
  { name: 'Preview & Export', path: '/preview' },
]

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Welcome to Your Editor</h1>
      <p className="text-gray-600">Click a section below to start editing.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(section => (
          <Link
            key={section.path}
            href={section.path}
            className="block bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-blue-600">{section.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{section.path}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
