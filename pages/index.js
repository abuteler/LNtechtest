import fetch from 'node-fetch';
import { Listado } from "../components/index";

function Index ({ articles }) {
  return (<div>
    <div>Banner top</div>
    <div className="content-container">
      <Listado data={articles} />
      <div>Banner aside</div>
    </div>
  </div>);
}

export async function getServerSideProps () {
  const res = await fetch('https://api-test-ln.herokuapp.com/articles');
  const articles = await res.json();
  return {
    props: {
      articles,
    }
  };
}

export default Index;