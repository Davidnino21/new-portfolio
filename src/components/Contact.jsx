import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.name) {
      setError("Name is required");
    } else if (!data.email) {
      setError("Email is required");
    } else if (!data.message) {
      setError("Message is required");
    }
    console.log(data);
  }

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div>
          <h3>Get in touch</h3>
          <h4>Email: Davidnino_21@yahoo.com</h4>
          <h4>Phone: 209-269-9052</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Type Message"
            onChange={handleChange}
          ></textarea>
          <p>{error}</p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
