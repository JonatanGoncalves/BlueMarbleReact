import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import '../assets/css/HomeScreen.css';
import Button from "../components/Button";
import BgVideo from '../media/BlueMarble-rotating.mp4';

export default function HomeScreen(){
    return(
        <div>
            <div className='home'>
                <video src={BgVideo} autoPlay muted Loop class="video-bg"></video>
                <div className='bg-overlay'></div>

                <div className='text-home'>
                    <h1><i>BLUE</i> MARBLE</h1>
                </div>
            </div>
            <div>
                <Link to={"/login"} className="bot">
                    <Button ripple={"#f0f0f0f0"}>LOGIN</Button>
                </Link>
            </div>
            <div className='section-middle'>
                <div className="artigo">
                    <div className="img">
                        <Link to={"/artigos"}>
                            <Image src={require("../assets/images/news.png")} width={90} />
                        </Link>
                    </div>
                    <p>Artigos</p>
                </div>

                <div className="bate-papo">
                    <div className="img">
                        <Link to={"/batepapos"}>
                            <Image src={require("../assets/images/chat-2.png")} width={90} />
                        </Link>
                    </div>
                    <p>Bate-Papo</p>
                </div>

                <div className="jogos">
                    <div className="img">
                        <Link to={"/jogos"}>
                            <Image src={require("../assets/images/brain.png")} width={90} />
                        </Link>
                    </div>
                    <p>Jogos e Quiz</p>
                </div>
            </div>
            <div className="section-last">
                <div className="overlay-section-last"></div>
                <div className="sobre">
                    <p><b>The Blue Marble - (O Berlinde Azul, numa tradução livre do inglês) é uma famosa fotografia da Terra, tirada em 7 de dezembro de 1972 pela tripulação da missão Apollo 17, a uma distância de aproximadamente 45.000 km da Terra, a caminho da Lua. É uma das imagens fotográficas existentes mais amplamente distribuídas.</b></p>
                </div>
            </div>
        </div>
    )
}