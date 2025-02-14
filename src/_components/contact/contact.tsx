// Components
import "./contact.scss";

// Icons
import { IoCloseCircle } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactPage: React.FC<ContactPageProps> = ({ setSlidePopup }) => {
  const closePage = () => {
    const landingPage = document.querySelector(".container");
    landingPage?.classList.add("offLoad");

    setTimeout(function () {
      setSlidePopup("");
    }, 300);
  };

  return (
    <div className="container glass">
      <div className="contact-main">
        <div className="contact-heading-text">
          <h2>
            Let's <span>Get In Touch</span>
          </h2>
        </div>
        {/* Content */}
        <div className="contact-line"></div>
        <div className="contact-content text-xl mt-12 grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="contact-left flex flex-col gap-4">
            {/* Phone */}
            <div className="contact-box glass rounded-lg flex flex-row items-center p-4">
              <div className="phone sign">
                <FaSquarePhone size={100} fill="#34c759" />
              </div>
              <div className="phone-content ml-4">
                <div className="contact-sub-heading">
                  <h2>Phone</h2>
                </div>
                <div className="contact-text">
                  <p>
                    <a href="tel:+66-96-162-5363">+66 96 162 5363</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Line */}
            <div className="contact-box glass rounded-lg flex flex-row items-center p-4">
              <div className="line sign">
                <FaLine size={100} fill="#06C755" />
              </div>
              <div className="line-content ml-4">
                <div className="contact-sub-heading">
                  <h2>Line</h2>
                </div>
                <div className="contact-text">
                  <p>
                    <a href="http://line.me/ti/p/~cnk_1998" target="_blank">
                      Cnk_1998
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="contact-right flex flex-col gap-4">
            {/* Linkedin */}
            <div className="contact-box glass rounded-lg flex flex-row items-center p-4">
              <div className="linkedin sign">
                <FaLinkedin size={100} fill="#0077B5" />
              </div>
              <div className="linkedin-content ml-4">
                <div className="contact-sub-heading">
                  <h2>Linkedin</h2>
                </div>
                <div className="contact-text">
                  <p>
                    <a
                      href="https://www.linkedin.com/in/chaipat-k/"
                      target="_blank"
                    >
                      Linkedin.com/in/chaipat-k
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="contact-box glass rounded-lg flex flex-row items-center p-4">
              <div className="email sign">
                <MdEmail size={100} fill="#007aff" />
              </div>
              <div className="email-content ml-4">
                <div className="contact-sub-heading">
                  <h2>Email</h2>
                </div>
                <div className="contact-text">
                  <p>
                    <a
                      href="mailto:chaipat.k.98@gmail.com?subject=Interview Invitation"
                      target="_blank"
                    >
                      Chaipat.k.98@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="contact-close-button"
        onClick={closePage}
        aria-label="close"
      >
        <IoCloseCircle size={50} className="contact-close-icon" />
      </button>
    </div>
  );
};

export default ContactPage;
interface ContactPageProps {
  setSlidePopup: (value: string) => void;
}
