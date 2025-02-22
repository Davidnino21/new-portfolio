import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!data.name) {
      setError("Name is required");
    } else if (!data.email) {
      setError("Email is required");
    } else if (!data.message) {
      setError("Message is required");
    }
    if (!error) {
      try {
        setSending(true);
        const res = await fetch("/api/send-message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        setSuccess(json.message);
        setData({ name: "", email: "", message: "" });
      } catch (error) {
        setError("Failed to send.Try again.");
      } finally {
        setSending(false);
      }
    }
  }

  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div>
          <h3>Get in touch:</h3>
          <h4>
            <AiOutlineMail /> Davidnino_21@yahoo.com
          </h4>
          <h4>
            <MdPhoneIphone /> 209-269-9052
          </h4>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Type Message"
            value={data.message}
            onChange={handleChange}
          ></textarea>
          <p className="success">{success}</p>
          <p className="error">{error}</p>
          <button disabled={sending}>
            {sending ? "Sending Message..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
