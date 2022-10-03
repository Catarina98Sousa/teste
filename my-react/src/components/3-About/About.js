/* CSS */
import "../3-About/About.css";
import "../button/button.css";

/* img/icons */
import { Profile, ProfileDark } from "../../images/galery/profile";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */


function About(props) {
  return (
    <div className="About " id="about">
      <div className="container-md container-sm py-5">
        <div className="row mx-5 justify-content-center">
          <div className="col-md col-sm">
            {/* <Fade left oposite cascade> */}
              <h1 className="title mb-5">About</h1>
          {/*   </Fade> */}
          </div>
        </div>
        <div className="row mx-5">
         {/*  <Zoom> */}
            <div className="col-md-4 col-sm">
              {/* phone difer  */}
              <img src={props.theme === "light" ? Profile : ProfileDark} alt="photo-profile" className="profile" />
            </div>
          {/* </Zoom> */}
         {/*  <Fade right oposite cascade> */}
            <div className="col-md-7 col-sm text">
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
            <div className="col-md col-sm"></div>
            {/* <Zoom> */}
              <div className="col-md-3 col-sm-1">
                <a href="CV-EN.pdf" download="CV-EN.pdf" className="btn-primary">
                  {/* phone difer  */}
                  <p>
                    <span className="icon-btn">
                      <BsFillFileEarmarkPdfFill />
                    </span>
                    Download CV <span className="lang"> EN</span>
                  </p>
                </a>
              </div>
              <div className="col-md-3 col-sm-1">
                <a href="CV-PT.pdf" download="CV-PT.pdf" className="btn-primary">
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
        
      </div>
    </div>
  );
}

export default About;
