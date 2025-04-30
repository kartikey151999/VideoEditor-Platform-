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
    <aside className="w-60 bg-white shadow-md p-4 flex flex-col gap-2">
      <h1 className="text-xl font-bold mb-4">🎬 Editor</h1>
      {navItems.map(item => {
        const isActive = pathname === item.path
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`rounded px-2 py-1 transition ${
              isActive
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </aside>
  )
}
