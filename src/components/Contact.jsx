function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div>
          <h3>Get in touch</h3>
          <h4>Email: Davidnino_21@yahoo.com</h4>
          <h4>Phone: 209-269-9052</h4>
        </div>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea rows="4" name="message">
            Type Message
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
