import "../footer/footer.css";
import "../button/button.css";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-2">
          <div className="col by mt-3">
            <p>Developed by Catarina Sousa</p>
          </div>
          <div className="col d-flex justify-content-end align-items-end">
            <BsLinkedin className="social-icon mx-1" />
            <BsWhatsapp className="social-icon mx-1" />
            <BsGithub className="social-icon mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
