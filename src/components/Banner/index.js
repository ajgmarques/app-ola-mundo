import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/Programacao1.jpg'

export default function Banner() {
return (
<div className={styles.banner}>
  <div className={styles.apresentacao}>
    <h1 className={styles.titulo}>
      Olá, mundo
    </h1>
    <p className={styles.paragrafo}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laudantium?
      Eos facilis debitis pariatur quaerat ratione possimus nulla maiores.
      Expedita voluptatum illo assumenda alias amet quod laborum itaque facilis
      ducimus?
    </p>
  </div>

  <div className={styles.imagens}>
    <img
      className={styles.circuloColorido}
      src={circuloColorido}
      aria-hidden={true}
      alt='Circulo colorido'
      />
       <img
      className={styles.minhaFoto}
      src={minhaFoto}
      aria-hidden={true}
      alt='Foto do banner'
      />
  </div>
</div>
)
}
