import React from "react";
import styles from "./styles.module.css"; // Importando o CSS como objeto
import { ReactSocialMediaIcons } from "react-social-media-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.filhosFooter} ${styles.Redes}`}>
        <div className={styles.cadastrar}>
          <a href="" className={`${styles.linkfooter} ${styles.cadastrarSe}`}>
            CADASTRE-SE
          </a>
        </div>
        <div className={styles.solucaoRedes}>
          <h3 className={styles.siganos}>Siga-nos</h3>
          <div className={styles.redesSociais}>
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="facebook"
              iconColor="#c94e1a"
              backgroundColor="black"
            />
          </div>
          <div className={styles.redesSociais}>
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="instagram"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className={styles.redesSociais}>
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="youtube"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className={styles.redesSociais}>
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="linkedin"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
          <div className={styles.redesSociais}>
            <ReactSocialMediaIcons
              borderColor="rgba(0,0,0,0.25)"
              icon="twitter"
              backgroundColor="black"
              iconColor="#c94e1a"
            />
          </div>
        </div>
      </div>
      <div className={styles.filhosFooter}>
        <div className={styles.caixinhas}>
          <h3>TOP FILMES DA SEMANA</h3>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Filme-1
            </a>
          </p>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Filme-2
            </a>
          </p>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Filme-3
            </a>
          </p>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Filme-4
            </a>
          </p>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Filme-5
            </a>
          </p>
        </div>
        <div className={styles.caixinhas}>
          <h3>SNACK BAR</h3>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Snack Bar
            </a>
          </p>
        </div>
        <div className={styles.caixinhas}>
          <h3>PARA EMPRESAS</h3>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Reserva de salas
            </a>
          </p>
          <p>
            <a href="" target="_blank" className={styles.linkfooter}>
              Vouchers
            </a>
          </p>
        </div>
        <div className={styles.caixinhas}>
          <h3>CONTATO</h3>
          <p>
            <a target="_blank" href="" className={styles.linkfooter}>
              Central de atendimento
            </a>
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <p>
          Cinema <span className={styles.infinito}>∞</span> &copy;
        </p>
      </div>
    </footer>
  );
}
