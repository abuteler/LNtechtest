import Grilla from './Grilla';
import Etiquetas from './Etiquetas'

function Listado () {
  return (<div>
    <h1>Grilla here.</h1>
    <Etiquetas />
    <Grilla />

    <button>Mas notas</button>
  </div>);
}

export default Listado;