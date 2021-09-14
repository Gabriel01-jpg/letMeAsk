import illustrationIMG from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg'
// fazendo isso por causa do webpack
import '../styles/auth.scss'
import { Button } from "../components/Button";

export function Home(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationIMG} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo da LetMeAsk"/>
                    <button className="create-room">
                        <img src={googleIconIMG} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form>
                        <input type="text"
                               placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}