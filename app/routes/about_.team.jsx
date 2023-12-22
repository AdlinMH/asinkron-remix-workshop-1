import { Link } from "@remix-run/react"

export const meta = () => {
  return [{ title: "Team Page" }]
}

export default function Index() {
  return (
    <div>
      <h1>This is Team</h1>
      <Link to="/">Go To Homepage</Link>
    </div>
  )
}