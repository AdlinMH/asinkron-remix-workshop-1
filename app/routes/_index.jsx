import { Link } from '@remix-run/react';

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
  <div>
    <h1>Homepage</h1>
    <Link to="/about">Go To About</Link>
  </div>
  )
}
