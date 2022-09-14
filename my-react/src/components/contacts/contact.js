/* CSS */
import "../contacts/contact.css";
import "../button/button.css";

/* React-animation */
/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */

/* img Social midia */
/* import { Linkdin, LinkdinDark } from "../../images/icon/social/linkdin";
import { Whatsap, WhatsapDark } from "../../images/icon/social/whatsap";
import { Codepen, CodepenDark } from "../../images/icon/social/codepen";
import { Github, GithubDark } from "../../images/icon/social/github"; */
/* icon-react */
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Contact(props) {
  return (
    <div className="Contact" id="contact">
      <div className="container py-5">
        <div className="row mx-5 mb-5 justify-content-between align-items-baseline">
          <div className="col">
            {/* <Fade left oposite cascade> */}
              <h1 className="title mb-5">Contact</h1>
            {/* </Fade> */}
          </div>
         {/*  <Fade right oposite delay={500} cascade> */}
            <div className="col-3 tex-end">
              <p className="location">
                <BsGeoAltFill /> Portugal,
              </p>
              <p className="city">Lisbon</p>
            </div>
         {/*  </Fade> */}
        </div>

        <div className="row pt-5">
          <div className="col-5">
            {/* <Zoom cascade> */}
              <div className="d-flex flex-wrap justify-content-center">
                <a href="#home" className="midia">
                  {/*  <img
                    src={props.theme === "light" ? Linkdin : LinkdinDark}
                    className="midia m-2"
                    alt=""
                  /> */}
                </a>
                <a href="#home" className="midia">
                  {/* 
                <img
                  src={props.theme === "light" ? Whatsap : WhatsapDark}
                  className="midia m-2"
                  alt="Whatsap"
                /> */}
                </a>
                <a href="#home" className="midia">
                  {/* <img
                  src={props.theme === "light" ? Codepen : CodepenDark}
                  className="midia m-2"
                  alt="Codepen"
                /> */}
                </a>
                <a href="#home" className="midia">
                  {/* <img
                  src={props.theme === "light" ? Github : GithubDark}
                  className="midia m-2"
                  alt="Github"
                /> */}
                </a>
              </div>
            {/* </Zoom> */}
          </div>
          <div className="col">
            <div className="info mx-5">
              {/* <Fade right delay={500} cascade> */}
                <div className=" border mb-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="d-flex align-items-center sub-title">
                      <BsEnvelopeFill className="me-3" /> Email:
                    </p>
                    <p className="mail ms-3"> catarina989sousa@gmail.com</p>
                  </div>
                </div>
                <div className="row mx-1 ">
                  <div className="border col me-1">
                    <div className="d-flex justify-content-center align-items-center">
                      <h4 className="mb-2 d-flex align-items-center ">
                        <BsTelephoneFill className="me-2" />{" "}
                        <BsWhatsapp className="me-2" /> Phone(Whatsap)
                      </h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="number">962229610</p>
                    </div>
                  </div>
                  <div className="border col ms-1">
                    <div className="d-flex justify-content-center align-items-center">
                      <h4 className="mb-2">
                        <BsPhoneFill className="me-2" />
                        Phone (Call)
                      </h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="number">928102978</p>
                    </div>
                  </div>
                </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
