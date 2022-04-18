import { Link } from 'react-router-dom'

export function Main() {
  return (
    <div>
      <h1>Main</h1>
      <nav>
        <Link to="/">Main</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  )
}
