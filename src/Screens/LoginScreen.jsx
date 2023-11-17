import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/LoginScreen.css";
import Slider from "../components/Slider";

export default function LoginScreen(){
    return(
        <div>

            <div className="container-header">
                <div>
                    <h1 className="h1"><i>BLUE </i>MARBLE</h1>
                </div>
                <div className="logo">
                    <Image src={require("../assets/images/Logo.png")} width={150} />
                </div>
            </div>

            <div className="container">
                <div className="login-container">
                    <div className="email">
                        <label for="uname"><b>E-mail ou Telefone</b></label>
                        <input type="text" placeholder="Enter e-mail" name="uname" required />
                    </div>
                    <div className="senha">
                        <label for="psw"><b>Senha</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                    </div>
                    <div className="cadastro">
                        <Link to={"#"}>Esqueceu a senha?</Link>
                        <Link className="cadastro" to={"/user"}>
                            <button type="submit">Cadastrar</button>
                        </Link>
                    </div>
                    <p className="divider-text"><span>ou</span></p>
                    <div className="center">
                        <button className="google" type="submit">
                            <Image src={require("../assets/images/Google.png")}/>
                        Continuar com o Google
                        </button>
                    </div>
                </div>
                <Slider />
            </div>

        </div>
    )
}