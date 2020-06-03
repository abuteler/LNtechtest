import fetch from 'node-fetch';
import { Header, TopBanner, Listado, SideBanner } from '../components/index';

const contentContainerStyle = {
  paddingTop: 100,
  display: 'fixed',
};
const contentLayoutStyle = {
  display: 'flex',
  justifyContent: 'center',
};

function Index ({ articles }) {
  return (<div className="site-layout">
    <Header />
    <div className="content-container" style={contentContainerStyle}>
      <TopBanner />
      <div className="content-layout" style={contentLayoutStyle}>
        <Listado data={articles} />
        <SideBanner />
      </div>
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