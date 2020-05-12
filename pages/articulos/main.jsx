import Listado from "../../components/Listado";

function Main () {
  return (<div>

    <div>Banner top</div>
    <div className="content-container">
      <Listado />
      <div>Banner aside</div>
    </div>
  </div>);
}

export default Main;