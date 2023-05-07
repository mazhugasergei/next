import './style/insex.css'

export const metadata = {
  title: 'Home'
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}