import { Link } from '@remix-run/react'

export const meta = () => {
  return [{ title: "About Page" }]
}

export default function Index() {
  return (
    <div>
      <h1>This is About</h1>
      <Link to="/about/team">Go To Team</Link>
      <Link to="/contact-us">Go To Contact Us</Link>
    </div>
  )
}