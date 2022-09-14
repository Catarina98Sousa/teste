import "../About/About.css";
import "../button/button.css";
import Skill from "../skills/skill";
import { Profile, ProfileDark } from "../../images/galery/profile";
/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

function About(props) {
  return (
    <div className="About " id="about">
      <div className="container py-5">
        <div className="row mx-5 justify-content-center">
          <div className="col">
            {/* <Fade left oposite cascade> */}
              <h1 className="title mb-5">About</h1>
          {/*   </Fade> */}
          </div>
        </div>
        <div className="row mx-5">
         {/*  <Zoom> */}
            <div className="col-4">
              {" "}
              {/* phone difer  */}
              <img /* img n funciona ver mais tarde */
                src={props.theme === "light" ? Profile : ProfileDark}
                className="profile"
                alt="profile"
              />
            </div>
          {/* </Zoom> */}
         {/*  <Fade right oposite cascade> */}
            <div className="col text">
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          {/* </Fade> */}
          <div className="row d-inline-flex justify-content-end mt-3 ">
            {/* phone difer */}
            <div className="col"></div>
            {/* <Zoom> */}
              <div className="col-3">
                <a href="cv-en" download className="btn-primary">
                  {/* phone difer  */}
                  <p>
                    <span className="icon-btn">
                      <BsFillFileEarmarkPdfFill />
                    </span>
                    Download CV <span className="lang"> EN</span>
                  </p>
                </a>
              </div>
              <div className="col-3">
                <a href="cv-pt" download className="btn-primary">
                  {/* phone difer  */}

                  <p>
                    <span className="icon-btn">
                      <BsFillFileEarmarkPdfFill />
                    </span>
                    Download CV <span className="lang"> PT</span>
                  </p>
                </a>
              </div>
            {/* </Zoom> */}
          </div>
        </div>
        <Skill />
      </div>
    </div>
  );
}

export default About;
