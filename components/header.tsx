import type React from "react"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      {/* Add navigation or other header elements here */}
    </header>
  )
}

export default Header
