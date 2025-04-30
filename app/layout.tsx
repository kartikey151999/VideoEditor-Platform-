// import './globals.css'
import '../styles/globals.css'
import { ReduxProvider } from '@/redux/provider'
import Sidebar from '@/components/SideBar'

export const metadata = {
  title: 'Web Video Editor',
  description: 'A browser-based video editing tool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ReduxProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
