'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Upload', path: '/upload' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Audio', path: '/audio' },
  { name: 'Subtitles', path: '/subtitles' },
  { name: 'Overlay', path: '/overlay' },
  { name: 'Preview', path: '/preview' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-lg p-6 border-r border-gray-200 hidden md:block">
      <h1 className="text-2xl font-bold mb-8 text-blue-600">🎬 Video Editor</h1>
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
