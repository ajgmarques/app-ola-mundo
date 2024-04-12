import PostModelo from 'components/PostModelo';
import styles from './SobreMim.module.css';
import fotoCapa from 'assets/Programacao1.jpg'
import fotoSobreMim from 'assets/Programacao2.jpg'

function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim...">
      <h3 className={styles.subtitulo}>
        Olá
      </h3>

      <img className={styles.fotoSobreMim} src={fotoSobreMim}
        alt="Foto Sobre mim"></img>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        officia praesentium itaque voluptate? Excepturi esse eum incidunt
        praesentium nulla, reiciendis nostrum expedita optio rem mollitia beatae
        similique quam, nisi minima!
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        officia praesentium itaque voluptate? Excepturi esse eum incidunt
        praesentium nulla, reiciendis nostrum expedita optio rem mollitia beatae
        similique quam, nisi minima!
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        officia praesentium itaque voluptate? Excepturi esse eum incidunt
        praesentium nulla, reiciendis nostrum expedita optio rem mollitia beatae
        similique quam, nisi minima!
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        officia praesentium itaque voluptate? Excepturi esse eum incidunt
        praesentium nulla, reiciendis nostrum expedita optio rem mollitia beatae
        similique quam, nisi minima!
      </p>

    </PostModelo>

  );
}

export default SobreMim;
