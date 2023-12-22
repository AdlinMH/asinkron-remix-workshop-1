import contactUsStyles from '../styles/contact-us.css'

export const meta = () => {
  return [{ title: "Contact Us Page", themeColor: "#4285f4" }]
}

export const links = () => [
  { rel: "stylesheet", href: contactUsStyles },
];

export default function Index() {
  return (
    <form className="contact-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}