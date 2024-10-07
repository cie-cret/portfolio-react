import "./about.css";
import { IoCloseCircle } from "react-icons/io5";

const AboutPage: React.FC<AboutPageProps> = ({ setSlidePopup }) => {
  const closePage = () => {
    const landingPage = document.querySelector(".container");
    landingPage?.classList.add("offLoad");

    setTimeout(function () {
      setSlidePopup("");
    }, 300);
  };

  return (
    <div className="container glass">
      <div className="about-main relative">
        <div className="about-heading-text">
          <h2>
            Get To <span>Know Me</span>
          </h2>
        </div>
        {/* Content */}
        <div className="about-line"></div>
        <div className="about-content flex">
          {/* Text */}
          <div className="about-textbox">
            <p>
              Hi! I'm <span className="emphasized">Chaipat</span>, or you can
              call me <span className="emphasized">Cie</span> (like an alphabet
              C). {/* <br /> */}
              Currently, being a 26 year-old (front-end) web developer-to-be
              <br />
              <span className="small">(but still unemployement 😭)</span>
              <br />
              <br />I didn't graduate from a related field, nor science-math
              class, {/* <br /> */}
              but I do know I'm interested in coding, programming, and tech.
              <br />
              <br />
              If you're reading this and wondering what changes my mind,{" "}
              {/* <br /> */}
              what I can do for your team, or any questions on your mind,{" "}
              {/* <br /> */}
              what about we have a session discussing this?
            </p>
          </div>
          {/* Picture */}
          <div className="about-profile-char rounded-full select-none">
            <img src="/profile/profile-cartoon.png" alt="me" />
          </div>
        </div>
      </div>
      <button
        className="about-close-button"
        onClick={closePage}
        aria-label="close"
      >
        <IoCloseCircle size={50} className="about-close-icon" />
      </button>
    </div>
  );
};

export default AboutPage;
interface AboutPageProps {
  setSlidePopup: (value: string) => void;
}
