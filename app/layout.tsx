// app/layout.tsx
import './globals.css'
import { ReduxProvider } from '@/redux/provider'

export const metadata = {
  title: 'Web Video Editor',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
