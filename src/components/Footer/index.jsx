import "./styles.css";
import { ReactSocialMediaIcons } from "react-social-media-icons";
export default function Footer() {
  return (
      <footer>
        <div className="filhosFooter Redes">
          <div className="cadastrar">
            <a href="" className="linkfooter cadastrarSe">
              CADASTRE-SE
            </a>
          </div>
          <h3 className="siga-nos">Siga-nos</h3>
          <div className="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="facebook"
              iconColor="#c94e1a"
              backgroundColor="black"
            />
          </div>
          <div className="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="instagram"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="youtube"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="linkedin"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="twitter"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
        </div>
        <div className="filhosFooter">
          <div className="caixinhas">
            <h3>TOP FILMES DA SEMANA</h3>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Filme-1
              </a>
            </p>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Filme-2
              </a>
            </p>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Filme-3
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-4
              </a>
            </p>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Filme-5
              </a>
            </p>
          </div>
          <div className="caixinhas">
            <h3>SNACK BAR</h3>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Snack Bar
              </a>
            </p>
          </div>
          <div className="caixinhas">
            <h3>PARA EMPRESAS</h3>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Reserva de salas
              </a>
            </p>
            <p>
              <a href="" target="_blank" className="linkfooter">
                Vouchers
              </a>
            </p>
          </div>
          <div className="caixinhas">
            <h3>CONTATO</h3>
            <p>
              <a target="_blank" href="" className="linkfooter">
                Central de atendimento
              </a>
            </p>
          </div>
        </div>
        <div class="info">
          <p>
            Cinema <span className="infinito">∞</span> &copy;
          </p>
        </div>
    </footer>
  );
}