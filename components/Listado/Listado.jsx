import { PreviewArticulo, Etiquetas } from '../index';
import styles from './Listado.module.scss';

export default function Listado({articles}) {
  return (<div className={styles.container}>
    <h1>Acumulado Grilla</h1>
    <Etiquetas />
    <PreviewArticulo articles={articles} />
    <h3>{articles && articles[3] && articles[3].headlines.basic}</h3>
    <button>Mas notas</button>
  </div>)
};
