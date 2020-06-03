import { Grilla, Etiquetas } from '../index';

function Listado ({data}) {
  const styles = {
    width: 880,
    marginRight: 80,
  };
  return (<div style={styles}>
    <h1>Grilla here.</h1>
    <Etiquetas />
    <Grilla data={data} />
    <h3>{data && data.articles && data.articles[3].headlines.basic}</h3>
    <button>Mas notas</button>
  </div>);
}

export default Listado;