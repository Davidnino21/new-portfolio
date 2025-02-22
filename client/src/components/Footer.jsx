import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-logo">
        <img id="logo" src="/David.svg" alt="logo" />
      </div>
      <div className="icons">
        <p>
          <a
            href="https://github.com/Davidnino21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/david-nino-063364132/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </p>
        <p>
          <a
            href="https://stackoverflow.com/users/22456778/david-nino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow />
          </a>
        </p>
        <p>
          <a
            href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiIndeed />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
