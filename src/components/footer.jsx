import React from "react";
import "./css/footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>THINK FIRE</h3>
        <p>
          Made with <span class="heart">&#10084;</span> HASAN YOLCHIYEV
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">THINK FIRE</a>{" "}
        </p>
          
      </div>
    </footer>
  );
};

export default footer;
