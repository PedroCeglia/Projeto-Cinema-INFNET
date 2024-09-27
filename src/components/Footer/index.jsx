import "./styles.css";
import { ReactSocialMediaIcons } from "react-social-media-icons";
export default function Footer() {
  return (
    <>
      <footer>
        <div class="filhosFooter Redes">
          <div class="cadastrar">
            <a href="" class="linkfooter cadastrarSe">
              CADASTRE-SE
            </a>
          </div>
          <h3 class="siga-nos">Siga-nos</h3>
          <div class="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="facebook"
              iconColor="#c94e1a"
              backgroundColor="black"
            />
          </div>
          <div class="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="instagram"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div class="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="youtube"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div class="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="linkedin"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div class="redesSociais">
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="twitter"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
        </div>
        <div class="filhosFooter">
          <div class="caixinhas">
            <h3>TOP FILMES DA SEMANA</h3>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-1
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-2
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-3
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-4
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Filme-5
              </a>
            </p>
          </div>
          <div class="caixinhas">
            <h3>SNACK BAR</h3>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Snack Bar
              </a>
            </p>
          </div>
          <div class="caixinhas">
            <h3>PARA EMPRESAS</h3>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Reserva de salas
              </a>
            </p>
            <p>
              <a href="" target="_blank" class="linkfooter">
                Vouchers
              </a>
            </p>
          </div>
          <div class="caixinhas">
            <h3>CONTATO</h3>
            <p>
              <a target="_blank" href="" class="linkfooter">
                Central de atendimento
              </a>
            </p>
          </div>
        </div>
        <div class="info">
          <p>Insira aqui o nome da empresa &copy;</p>
        </div>
      </footer>
    </>
  );
}
