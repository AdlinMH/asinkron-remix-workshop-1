import { Link } from '@remix-run/react'

import aboutUsStyles from '../styles/about-us.css'

export const meta = () => {
  return [{ title: "About Page" }]
}

export const links = () => [
  { rel: "stylesheet", href: aboutUsStyles },
];

export default function Index() {
  return (
    <div>
      <h1>This is About</h1>
      <Link to="/about/team">Go To Team</Link>
      <Link to="/contact-us">Go To Contact Us</Link>

      <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a passionate team dedicated to providing
        high-quality products/services to our customers. Our mission is to
        deliver excellence in everything we do.
      </p>
      <h2>Our Story</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        libero vitae justo dignissim sodales eget sit amet quam. Mauris
        ullamcorper, dolor sit amet luctus hendrerit, orci dui vehicula libero,
        eget rhoncus sem justo sit amet quam.
      </p>
      <h2>Our Team</h2>
      <p>
        Meet the amazing individuals behind our success. Our team is comprised
        of talented professionals who are passionate about what they do.
      </p>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - COO</li>
        <li>Bob Johnson - CTO</li>
      </ul>
    </div>
    </div>
  )
}