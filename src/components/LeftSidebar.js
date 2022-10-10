import React, { useState } from "react";
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";

const tags = [
  "react js",
  "javascript",
  "nodejs",
  "sass",
  "next js",
  "html",
  "css",
  "webdev",
  "frontend",
  "github",
  "express",
  "git",
  "mongodb",
  "npm",
  "sql",
  "typescript",
  "tailwindcss",
];

const LeftSidebar = (props) => {
  const [more, setMore] = useState(false);
  const toggle = () => {
    setMore(!more);
  };

  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            <li>
              <a href="/home">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li>
            <li>
              <a href="/reading">
                <i>
                  <FcReading />
                </i>
                Reading List
              </a>
            </li>
            <li>
              <a href="/list">
                <i>
                  <FcTodoList />
                </i>
                list
              </a>
            </li>
            <li>
              <a href="/podcast">
                <i>
                  <AiFillAudio />
                </i>
                Podcasts
              </a>
            </li>
            <li>
              <a href="/videos">
                <i>
                  <FcVideoCall />
                </i>
                Videos
              </a>
            </li>

            <li>
              <a href="/tags">
                <i>
                  <FaTags />
                </i>
                Tags
              </a>
            </li>

            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <a
                href="/#"
                onClick={toggle}
                style={{
                  display: "flex",
                  gap: "0.3rem",
                }}
              >
                More
                <MdExpandMore />
              </a>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li>
                <a href="/code">
                  <i>
                    <FcAbout />
                  </i>
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="/FAQ">
                  <i>
                    <FcIdea />
                  </i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/DEV">
                  <i>
                    <FcShop />
                  </i>
                  DEV Shop
                </a>
              </li>
              <li>
                <a href="/sponsors">
                  <i>
                    <FcLike />
                  </i>
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/about">
                  <i>
                    <FaDev />
                  </i>
                  About
                </a>
              </li>
              <li>
                <a href="/privacy">
                  <i>
                    <FcBriefcase />
                  </i>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms">
                  <i>
                    <FcDisclaimer />
                  </i>
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <a href="https://www.linkedin.com/in/ali-samir-ali/" target="_blank">
            <i>
              <RiLinkedinFill />
            </i>
          </a>
          <a href="https://twitter.com/Ali_Samir_21" target="_blank">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a href="https://www.facebook.com/Ali.Samir.Ali.Zaki" target="_blank">
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a href="https://github.com/alisamirali" target="_blank">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="https://www.instagram.com/alisamir.dev/" target="_blank">
            <i>
              <BsInstagram />
            </i>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={() => props.closeMenu()}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              <nav className="leftBar__menu">
                <ul>
                  <li>
                    <a href="/home">
                      <i>
                        <FcHome />
                      </i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/reading">
                      <i>
                        <FcReading />
                      </i>
                      Reading List
                    </a>
                  </li>
                  <li>
                    <a href="/list">
                      <i>
                        <FcTodoList />
                      </i>
                      list
                    </a>
                  </li>
                  <li>
                    <a href="/podcast">
                      <i>
                        <AiFillAudio />
                      </i>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="/videos">
                      <i>
                        <FcVideoCall />
                      </i>
                      Videos
                    </a>
                  </li>

                  <li>
                    <a href="/tags">
                      <i>
                        <FaTags />
                      </i>
                      Tags
                    </a>
                  </li>

                  <li className={more ? "more hidden" : "more"}>
                    <i></i>
                    <a href="/#" onClick={toggle}>
                      More...
                    </a>
                  </li>

                  <div className={more ? "list" : "list hidden"}>
                    <li>
                      <a href="/code">
                        <i>
                          <FcAbout />
                        </i>
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="/FAQ">
                        <i>
                          <FcIdea />
                        </i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/DEV">
                        <i>
                          <FcShop />
                        </i>
                        DEV Shop
                      </a>
                    </li>
                    <li>
                      <a href="/sponsors">
                        <i>
                          <FcLike />
                        </i>
                        Sponsors
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <i>
                          <FaDev />
                        </i>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/privacy">
                        <i>
                          <FcBriefcase />
                        </i>
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a href="/terms">
                        <i>
                          <FcDisclaimer />
                        </i>
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <i>
                          <FcBusinessContact />
                        </i>
                        Contact
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
              <div
                className={more ? "leftBar__social" : "leftBar__social hidden"}
              >
                <a
                  href="https://www.linkedin.com/in/ali-samir-ali/"
                  target="_blank"
                >
                  <i>
                    <RiLinkedinFill />
                  </i>
                </a>
                <a href="https://twitter.com/Ali_Samir_21" target="_blank">
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a
                  href="https://www.facebook.com/Ali.Samir.Ali.Zaki"
                  target="_blank"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="https://github.com/alisamirali" target="_blank">
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/alisamir.dev/"
                  target="_blank"
                >
                  <i>
                    <BsInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
