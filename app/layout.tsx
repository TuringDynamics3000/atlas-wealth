import '../styles/globals.css'

export const metadata = {
  title: 'Atlas Wealth',
  description: 'Atlas Wealth Console',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-background text-foreground'>
          {children}
        </div>
      </body>
    </html>
  )
}
