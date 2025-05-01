// import './globals.css'
import '../styles/globals.css'
import Sidebar from '@/components/SideBar'
import { ReduxProvider } from '@/redux/provider'

export const metadata = {
  title: 'Video Editing Platform',
  description: 'Edit videos in the browser with ease.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="flex min-h-screen bg-gray-50 text-gray-900">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
