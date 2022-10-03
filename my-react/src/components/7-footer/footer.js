/* CSS */
import "../7-footer/footer.css";
import "../button/button.css";

/* Img/icons */
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillCodepenSquare } from "react-icons/ai";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-2">
          <div className="col by mt-3">
            <p>Developed by Catarina Sousa</p>
          </div>
          <div className="col d-flex justify-content-end align-items-end pt-2">
            <a href="#home" >
            <BsLinkedin className="social-icon mx-1" /></a>
            <a href="#home" >
            <BsWhatsapp className="social-icon mx-1" /></a>
            <a href="#home" >
            <BsGithub className="social-icon mx-1" /></a>
            <a href="#home" >
                <AiFillCodepenSquare className="social-icon-def mx-1"/>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
