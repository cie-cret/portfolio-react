import "./experience.css";

// Icons
import { IoCloseCircle } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";

const ExperiencePage: React.FC<ExpPageProps> = ({ setSlidePopup }) => {
  const closePage = () => {
    const landingPage = document.querySelector(".container");
    landingPage?.classList.add("offLoad");

    setTimeout(function () {
      setSlidePopup("");
    }, 300);
  };

  return (
    <div className="container glass">
      <div className="exp-main relative">
        <div className="exp-heading-text">
          <h2>
            My <span>Project(s) & Skills</span>
          </h2>
        </div>
        {/* Content */}
        <div className="exp-line"></div>
        <div className="exp-content grid grid-cols-2 items-center gap-10 px-4">
          {/* Project */}
          <div className="exp-skills glass rounded-lg px-4 py-2 flex flex-col mt-4">
            <div className="exp-sub-heading my-2">
              <h3>
                Y2K Shop
                <span className="small ml-1"> ~ 60% completed</span>
              </h3>
            </div>
            <div className="exp-project card justify-center items-center">
              <div className="exp-project-pic m-2 cursor-pointer rounded">
                <a href="#" target="_blank">
                  <img
                    src="/project/Y2K_TH_Project.jpg"
                    alt="project"
                    width={350}
                    height={197}
                  />
                </a>
              </div>
              {/* Detail */}
              <div className="git-btn custom-button btn btn-sm btn-ghost px-6 rounded-3xl hover:scale-105">
                <a href="#" target="_blank">
                  <p>Github (Frontend)</p>
                </a>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="exp-skills glass rounded-lg px-4 py-2 flex flex-col items-center mt-4">
            <div className="flex flex-col w-full">
              <div className="exp-sub-heading my-2">
                <h3>Skills</h3>
              </div>

              <div className="skill-icon flex flex-col text-center gap-4">
                {/* First Row */}
                <div className="first-row flex flex-row justify-evenly">
                  <div className="skills html">
                    <FaHtml5 className="skill html" size={50} />
                    <p>HTML</p>
                  </div>
                  <div className="skills css">
                    <IoLogoCss3 className="skill css" size={50} />
                    <p>CSS</p>
                  </div>
                  <div className="skills js">
                    <IoLogoJavascript className="skill js" size={50} />
                    <p>JS</p>
                  </div>
                  <div className="divider divider-horizontal m-0"></div>
                  <div className="skills sass">
                    <FaSass className="skill sass" size={50} />
                    <p>SASS</p>
                  </div>
                  <div className="skills bootstrap">
                    <FaBootstrap className="skill bootstrap" size={50} />
                    <p>Bootstrap</p>
                  </div>
                  <div className="skills tailwind">
                    <RiTailwindCssFill className="skill tailwind" size={50} />
                    <p>Tailwind</p>
                  </div>
                </div>
                <div className="skill-line"></div>
                {/* Second Row */}
                <div className="second-row flex flex-row justify-evenly">
                  <div className="skills react">
                    <FaReact className="skill react" size={50} />
                    <p>React</p>
                  </div>
                  <div className="skills vue">
                    <IoLogoVue className="skill vue" size={50} />
                    <p>Vue</p>
                  </div>
                  <div className="divider divider-horizontal m-0"></div>
                  <div className="skills node">
                    <FaNodeJs className="skill node" size={50} />
                    <p>Node + Express</p>
                  </div>
                  <div className="skills python">
                    {/* <img
                      src="/logo/python.png"
                      alt="python_logo"
                      className="skill python"
                    /> */}
                    <FaPython className="skill python" size={50} />
                    <p>Python</p>
                  </div>
                  <div className="divider divider-horizontal m-0"></div>
                  <div className="skills postgre">
                    <BiLogoPostgresql className="skill postgre" size={50} />
                    <p>Postgre</p>
                  </div>
                  <div className="skills firebase">
                    <IoLogoFirebase className="skill firebase" size={50} />
                    <p>Firebase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume custom-button btn btn-sm btn-ghost px-6 mt-4 mb-2 rounded-3xl hover:scale-105">
              <a
                href="https://www.canva.com/design/DAGQYmGUO0o/ieN1r3mi5DeK9Ss_0tcXvw/view?utm_content=DAGQYmGUO0o&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
              >
                <p>View Resume</p>
              </a>
            </div>
          </div>
        </div>
        {/* Content End */}
      </div>
      {/* Box End */}
      <button
        className="exp-close-button"
        onClick={closePage}
        aria-label="close"
      >
        <IoCloseCircle size={50} className="exp-close-icon" />
      </button>
    </div>
  );
};

export default ExperiencePage;
interface ExpPageProps {
  setSlidePopup: (value: string) => void;
}
