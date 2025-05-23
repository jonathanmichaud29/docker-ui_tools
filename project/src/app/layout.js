import '../styles/globals.scss'

export const metadata = {
  title: 'UI Template - Contact Form',
  description: 'Smooth and responsive contact form template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header>
            <nav>
              <div className="nav-brand">UI Template</div>
            </nav>
          </header>

          {children}

          <footer>
            <p>&copy;2025 UI Tools</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
