// React, shallow, mount y render estan definidas como globals via jest-environment-enzyme
import { Header, TopBanner, Listado, SideBanner } from '../../components/index';

describe('Tests básicos de la pagina principal', () => {
  let wrapper;
  test('El componente Header existe', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).toExist();
  });
  test('El componente TopBanner existe', () => {
    wrapper = shallow(<TopBanner />);
    expect(wrapper).toExist();
  });
  test('El componente Header existe', () => {
    wrapper = shallow(<Listado />);
    expect(wrapper).toExist();
  });
  test('El componente Header existe', () => {
    wrapper = shallow(<SideBanner />);
    expect(wrapper).toExist();
  });
})