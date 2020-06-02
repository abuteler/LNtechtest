import { Listado } from "../components/index";

export default function Index() {
  return (<div>

    <div>Banner top</div>
    <div className="content-container">
      <Listado />
      <div>Banner aside</div>
    </div>
  </div>);
}
