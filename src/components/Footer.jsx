import { Image } from "react-bootstrap";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer>
                <ul className="social-icon">
                    <li>
                        <Link to={"#"}>
                            <Image src={require("../assets/images/facebook-2.png")} width={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <Image src={require("../assets/images/instagram-2.png")} width={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <Image src={require("../assets/images/linkedin-2.png")} width={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <Image src={require("../assets/images/twitter-2.png")} width={30} />
                        </Link>
                    </li>
                </ul>
                <ul className="menu">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/sobre"}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={"/contato"}>Contato</Link>
                    </li>
                </ul>
                <p>&copy;{new Date().getFullYear()} BlueMarble | All Rights Reserved</p>
            </footer>
            <script src={"../"}></script>
        </div>
    )
}

export default Footer;