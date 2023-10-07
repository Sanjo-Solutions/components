import "bootstrap/dist/css/bootstrap.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Components',
  description: 'Components built with Bootstrap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-100">
      <body className="h-100">{children}</body>
    </html>
  )
}
