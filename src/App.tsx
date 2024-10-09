// Library & Framework
import { useState, useEffect } from "react";

// Components
import "./App.css";
import AboutPage from "./components/about/about";
import ExperiencePage from "./components/experience/experience";
import ContactPage from "./components/contact/contact";

// Icons
// import { FaAddressCard } from "react-icons/fa";
// import { MdWork } from "react-icons/md";
// import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mainText, setMainText] = useState("Hi, ");
  const [switchedText, setSwitchedText] = useState("Welcome!");
  const [newColor, setNewColor] = useState("#007aff");
  // const [openPopup, setOpenPopup] = useState(false);
  const [slidePopup, setSlidePopup] = useState("");

  // Toggle Nav Bar
  const isActive = () => {
    setMenuOpened((prev) => !prev);
  };

  // Popup Page
  const openPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonID = (e.target as HTMLDivElement).id;
    // console.log(typeof e.target);

    if (buttonID === "about") {
      setSlidePopup("about");
    } else if (buttonID === "experience") {
      setSlidePopup("experience");
    } else if (buttonID === "contact") {
      setSlidePopup("contact");
    }
  };

  useEffect(() => {
    const profileNav = document.querySelector(".profile-pic");
    const miniNav = document.querySelector(".mini-nav");
    // const preloadImage = new Image();
    // preloadImage.src = "/profile/profile-blueZ.PNG";

    if (menuOpened) {
      profileNav?.classList.add("active");
    } else {
      profileNav?.classList.remove("active");
    }

    if (slidePopup !== "") {
      miniNav?.classList.add("full");
      profileNav?.classList.remove("active");

      if (slidePopup === "about") {
        miniNav?.classList.add("cyan");
        miniNav?.classList.remove("indigo");
        miniNav?.classList.remove("green");
      } else if (slidePopup === "experience") {
        miniNav?.classList.remove("cyan");
        miniNav?.classList.add("indigo");
        miniNav?.classList.remove("green");
      } else if (slidePopup === "contact") {
        miniNav?.classList.remove("cyan");
        miniNav?.classList.remove("indigo");
        miniNav?.classList.add("green");
      }
    } else {
      miniNav?.classList.remove("full");
    }
  }, [menuOpened, slidePopup]);

  // Swicth Text
  const mouseOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonID = (e.target as HTMLDivElement).id;

    if (buttonID === "about") {
      setMainText("Read");
      setSwitchedText("about me");
      setNewColor("#32ade6");
    } else if (buttonID === "experience") {
      setMainText("See");
      setSwitchedText("my porfolio");
      setNewColor("#5856d6");
    } else if (buttonID === "contact") {
      setMainText("Let's");
      setSwitchedText("Discuss!");
      setNewColor("#34c759");
    }
  };

  const mouseOff = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMainText(((e.target as HTMLDivElement).innerText = ""));
    // setMainText((e.target.innerText = ""));
    setSwitchedText(((e.target as HTMLDivElement).innerText = "Check it out!"));
    // setSwitchedText((e.target.innerText = "Check it out!"));
    setNewColor("#007aff");
  };

  return (
    <>
      <div className="app-container flex justify-center items-center h-screen">
        {/* Popups */}
        {slidePopup === "about" && <AboutPage setSlidePopup={setSlidePopup} />}
        {slidePopup === "experience" && (
          <ExperiencePage setSlidePopup={setSlidePopup} />
        )}
        {slidePopup === "contact" && (
          <ContactPage setSlidePopup={setSlidePopup} />
        )}
        {/* Profile */}
        <div className="main flex flex-col justify-center relative gap-8 p-8">
          <div
            className="profile-pic flex self-center rounded-full size-28 z-10 cursor-pointer"
            onClick={isActive}
          >
            <img
              src="/profile/profile-blueZ.PNG"
              alt="profile-picture"
              className="select-none rounded-full"
              height={112}
              width={112}
            />
          </div>
          {/* Nav Bar */}
          <div className="mini-nav absolute rounded-full size-44" id="mini-nav">
            <button
              onClick={openPage}
              onMouseEnter={mouseOn}
              onMouseLeave={mouseOff}
              aria-label="about"
            >
              {/* <FaAddressCard
                size={20}
                className="z-10 absolute about icon"
                id="about"
              /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="z-10 absolute about icon"
                id="about"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                  id="about"
                ></path>
              </svg>
            </button>
            <button
              onClick={openPage}
              onMouseEnter={mouseOn}
              onMouseLeave={mouseOff}
              aria-label="experience"
            >
              {/* <MdWork
                size={20}
                className="z-10 absolute experience icon"
                id="experience"
              /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="z-10 absolute experience icon"
                id="experience"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  id="experience"
                ></path>
              </svg>
            </button>
            <button
              onClick={openPage}
              onMouseEnter={mouseOn}
              onMouseLeave={mouseOff}
              aria-label="contact"
            >
              {/* <BsFillTelephoneFill
                size={20}
                className="z-10 absolute contact icon "
                id="contact"
              /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="z-10 absolute contact icon "
                id="contact"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  id="contact"
                ></path>
              </svg>
            </button>
          </div>
          {/* Text */}
          <h1 className="flex justify-center text-2xl font-bold z-10 select-none">
            {mainText}
            <span className="mark pl-1" style={{ color: newColor }}>
              {switchedText}
            </span>
          </h1>
        </div>
        {/* Decoration */}
        {/* <div className="bubble1"></div>
        <div className="bubble2"></div> */}
      </div>
    </>
  );
}

export default App;
// export interface ExperiencePage {
//   setSlidePopup: (value: string) => void;
// }
